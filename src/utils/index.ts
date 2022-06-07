import { StoryStatus } from '../models'

export const getTitleFtomStatus = (status: StoryStatus) => {
  switch (status) {
    case StoryStatus.TODO:
      return 'TODO'
    case StoryStatus.IN_PROGRESS:
      return 'In Progress'
    case StoryStatus.DONE:
      return 'Done'
    default:
      return 'Backlog'
  }
}
