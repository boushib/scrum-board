import CloseIcon from '../../icons/Close'
import { Story } from '../../models'
import './StoryDetails.sass'

interface Props {
  story: Story
  onClose: () => void
}

const StoryDetails = ({ story, onClose }: Props) => (
  <div className="story__wrapper">
    <div className="story">
      <CloseIcon onClick={onClose} />
      <h2 className="story__title">
        {story.id} | {story.title}
      </h2>
      <hr />
      <p className="story__description">{story.description}</p>
      <hr />
      <div className="story__status">
        <span>Status:</span>
        <div className="tag">{story.status.toLowerCase()}</div>
      </div>
      <div className="story__assignee">
        <span>Assignee:</span>
        <div
          className="story__assignee__avatar"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")`,
          }}
        ></div>
        <div className="story__assignee__username">{story.assignee}</div>
      </div>
    </div>
  </div>
)

export default StoryDetails
