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
    const storedStories = localStorage.getItem('stories')

    if (!storedStories) {
      localStorage.setItem('stories', JSON.stringify(STORIES))
    }

    const stories = storedStories
      ? JSON.parse(storedStories)
      : setStories(STORIES)
    setStories(stories)
  }, [])

  const handleUpdateStory = (storyId: string, status: StoryStatus) => {
    const _stories = [...stories]
    const index = _stories.findIndex((s) => s.id === storyId)
    _stories[index].status = status
    localStorage.setItem('stories', JSON.stringify(_stories))
    setStories(_stories)
  }

  return (
    <div className="board page">
      <div className="container">
        <div className="board__grid">
          {(Object.keys(StoryStatus) as Array<keyof typeof StoryStatus>).map(
            (key) => (
              <BoardCol
                status={StoryStatus[key]}
                stories={stories.filter((s) => s.status === StoryStatus[key])}
                onOpenStory={setSelectedStory}
                onUpdateStory={handleUpdateStory}
                key={key}
              />
            )
          )}
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
