import { Story } from '../../models'
import './StoryOverview.sass'

interface Props {
  story: Story
  onClick: () => void
}

const StoryOverview = ({ story, onClick }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('storyId', story.id)
  }

  return (
    <div
      className="story-overview"
      onDragStart={handleDragStart}
      onClick={onClick}
      draggable
      id={story.id}
    >
      <div className="story-overview__description">{story.description}</div>
      <div className="story-overview__footer">
        <div className="story-overview__id">{story.id}</div>
        <div
          className="story-overview__assignee"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default StoryOverview
