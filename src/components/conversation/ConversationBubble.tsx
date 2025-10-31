import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { useState } from 'react'
import { Copy, Check, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ConversationExchange } from '@/content/types/conversation'

interface ConversationBubbleProps {
  exchange: ConversationExchange
}

export function ConversationBubble({ exchange }: ConversationBubbleProps) {
  const isHuman = exchange.type === 'human'
  const isDecision = exchange.type === 'decision'

  return (
    <div
      className={cn(
        'flex w-full mb-6',
        isHuman ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] rounded-lg px-6 py-4 shadow-sm',
          isHuman
            ? 'bg-primary/10 border border-primary/20'
            : isDecision
            ? 'bg-accent border border-accent-foreground/20 text-slate-900 [&_*]:text-slate-900'
            : 'bg-muted border border-border'
        )}
      >
        {/* Speaker label */}
        <div
          className={cn(
            'text-sm font-semibold mb-3 flex items-center gap-2',
            isHuman
              ? 'text-primary'
              : isDecision
              ? 'text-slate-900 dark:text-slate-900'
              : 'text-foreground/70'
          )}
        >
          {isDecision && <Lightbulb className="h-4 w-4" />}
          {exchange.speaker}:
        </div>

        {/* Message content with markdown rendering */}
        <div
          className={cn(
            'prose prose-sm max-w-none',
            isDecision ? 'dark:prose-light' : 'dark:prose-invert',
            'prose-p:my-3 prose-p:leading-relaxed',
            isDecision ? 'prose-p:text-slate-900 dark:prose-p:text-slate-900' : 'prose-p:text-foreground',
            'prose-headings:mt-6 prose-headings:mb-3',
            'prose-ul:my-3 prose-ol:my-3',
            'prose-li:my-1',
            isDecision
              ? 'prose-code:text-sm prose-code:!text-slate-900 prose-code:bg-slate-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded'
              : 'prose-code:text-sm prose-code:!text-foreground prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
            'prose-pre:my-4 prose-pre:bg-background prose-pre:border prose-pre:border-border',
            'prose-blockquote:border-l-primary prose-blockquote:bg-muted/30'
          )}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              // Custom inline code component
              code: ({ node, inline, children, className, ...props }: any) => {
                // Inline code (backticks in text)
                if (inline) {
                  return (
                    <code
                      className={cn(
                        'px-1.5 py-0.5 rounded text-sm font-mono',
                        isDecision
                          ? 'text-slate-900 bg-slate-200'
                          : 'text-foreground bg-muted/50'
                      )}
                      {...props}
                    >
                      {children}
                    </code>
                  )
                }
                // Code blocks (handled by rehypeHighlight)
                return <code className={className} {...props}>{children}</code>
              },
              // Custom code block component with copy button
              pre: ({ children, ...props }) => {
                return (
                  <CodeBlock {...props}>
                    {children}
                  </CodeBlock>
                )
              },
            }}
          >
            {exchange.message}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

// Code block component with copy functionality
function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    // Extract text content from code element
    const codeElement = (children as React.ReactElement)?.props?.children
    const code = Array.isArray(codeElement)
      ? codeElement.join('')
      : typeof codeElement === 'string'
      ? codeElement
      : ''

    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre {...props} className="overflow-x-auto">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className={cn(
          'absolute top-2 right-2 p-2 rounded-md',
          'bg-background/80 hover:bg-background',
          'border border-border',
          'opacity-0 group-hover:opacity-100',
          'transition-all duration-200',
          'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary'
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  )
}
