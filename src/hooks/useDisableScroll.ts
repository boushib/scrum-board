import { useEffect } from 'react'

export const useDisableScroll = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [])
}
