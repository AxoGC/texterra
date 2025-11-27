export interface Quest {
  name: string
  steps: QuestStep[]
}

export interface QuestStep {
  id: string
  name: string
}

const quests: Record<string, Quest> = {}

export default quests
