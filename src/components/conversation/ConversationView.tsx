import type { ConversationData } from '@/content/types/conversation'
import { ConversationBubble } from './ConversationBubble'

interface ConversationViewProps {
  conversation: ConversationData
}

export function ConversationView({ conversation }: ConversationViewProps) {
  return (
    <div className="w-full">
      {/* Scrollable conversation container */}
      <div
        className="w-full h-[59rem] overflow-y-auto rounded-lg border border-border bg-background/50 p-6 shadow-inner"
        role="log"
        aria-label="Conversation messages"
      >
        {conversation.conversations.map((topic) => (
          <div key={topic.id} className="mb-12">
            {/* Topic heading */}
            <h3 className="text-xl font-semibold text-foreground mb-6 px-4">
              {topic.topic}
            </h3>

            {/* Exchanges for this topic */}
            {topic.exchanges.map((exchange, index) => (
              <ConversationBubble
                key={`${topic.id}-${index}`}
                exchange={exchange}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
