export interface ConversationExchange {
  type: 'human' | 'agent' | 'decision'
  speaker: string
  message: string
}

export interface ConversationTopic {
  id: string
  topic: string
  exchanges: ConversationExchange[]
}

export interface ConversationData {
  title: string
  subtitle: string
  conversations: ConversationTopic[]
}
