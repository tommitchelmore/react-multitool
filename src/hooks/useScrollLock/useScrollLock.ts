import { useCallback, useRef } from 'react'

function useScrollLock<T extends HTMLElement> () {
  const ref = useRef<T>(null)

  const lockScroll = useCallback(() => {
    if (ref.current) {
      ref.current.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [ref])

  const unlockScroll = useCallback(() => {
    if (ref.current) {
      ref.current.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [ref])

  return { ref, lockScroll, unlockScroll }
}

export default useScrollLock
