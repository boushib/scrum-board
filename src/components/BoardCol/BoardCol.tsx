import { Story } from '../../models'
import StoryOverview from '../StoryOverview'
import './BoardCol.sass'

interface Props {
  title: string
  stories: Array<Story>
}

const BoardCol = ({ title, stories }: Props) => (
  <div className="board-col">
    <div className="board-col__title">{title} - 12 issues</div>
    <hr />
    {stories.map((s) => (
      <StoryOverview story={s} key={s.id} />
    ))}
  </div>
)

export default BoardCol
