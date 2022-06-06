import { useEffect, useState } from 'react'
import BoardCol from '../../components/BoardCol'
import StoryDetails from '../../components/StoryDetails/StoryDetails'
import { STORIES } from '../../constants'
import { Story, StoryStatus } from '../../models'
import './Board.sass'

const Board = () => {
  const [stories, setStories] = useState<Array<Story>>([])
  const [selectedStory, setSelectedStory] = useState<Story>()

  useEffect(() => {
    setStories(STORIES)
  }, [])

  return (
    <div className="board page">
      <div className="container">
        <div className="board__grid">
          <BoardCol
            title="Backlog"
            stories={stories.filter((s) => s.status === StoryStatus.BACKLOG)}
            onOpenStory={setSelectedStory}
          />
          <BoardCol
            title="TODO"
            stories={stories.filter((s) => s.status === StoryStatus.TODO)}
            onOpenStory={setSelectedStory}
          />
          <BoardCol
            title="In Progress"
            stories={stories.filter(
              (s) => s.status === StoryStatus.IN_PROGRESS
            )}
            onOpenStory={setSelectedStory}
          />
          <BoardCol
            title="Done"
            stories={stories.filter((s) => s.status === StoryStatus.DONE)}
            onOpenStory={setSelectedStory}
          />
        </div>
      </div>
      {selectedStory && (
        <StoryDetails
          story={selectedStory}
          onClose={() => setSelectedStory(undefined)}
        />
      )}
    </div>
  )
}

export default Board
