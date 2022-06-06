import { Story } from '../../models'
import StoryOverview from '../StoryOverview'
import './BoardCol.sass'

interface Props {
  title: string
  stories: Array<Story>
  onOpenStory: (story: Story) => void
}

const BoardCol = ({ title, stories, onOpenStory }: Props) => (
  <div className="board-col">
    <div className="board-col__title">
      {title} - {stories.length} issue{stories.length === 1 ? '' : 's'}
    </div>
    <hr />
    {stories.map((s) => (
      <StoryOverview story={s} onClick={() => onOpenStory(s)} key={s.id} />
    ))}
  </div>
)

export default BoardCol
