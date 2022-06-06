import { useEffect, useState } from 'react'
import BoardCol from '../../components/BoardCol'
import { STORIES } from '../../constants'
import { Story, StoryStatus } from '../../models'
import './Board.sass'

const Board = () => {
  const [stories, setStories] = useState<Array<Story>>([])

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
          />
          <BoardCol
            title="TODO"
            stories={stories.filter((s) => s.status === StoryStatus.TODO)}
          />
          <BoardCol
            title="In Progress"
            stories={stories.filter(
              (s) => s.status === StoryStatus.IN_PROGRESS
            )}
          />
          <BoardCol
            title="Done"
            stories={stories.filter((s) => s.status === StoryStatus.DONE)}
          />
        </div>
      </div>
    </div>
  )
}

export default Board
