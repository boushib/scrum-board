export interface Story {
  id: string
  title: string
  status: StoryStatus
  assignee: string // TODO - Use user object instead
  description: string
}

export enum StoryStatus {
  BACKLOG = "BACKLOG",
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
