interface YamlViewerProps {
  yamlContent: string
}

export function YamlViewer({ yamlContent }: YamlViewerProps) {
  return (
    <div className="w-full h-[160rem] overflow-y-auto rounded-lg border border-border bg-background/50 shadow-inner">
      <pre className="p-6 text-sm font-mono leading-relaxed text-foreground whitespace-pre-wrap break-words">
        <code>{yamlContent}</code>
      </pre>
    </div>
  )
}
