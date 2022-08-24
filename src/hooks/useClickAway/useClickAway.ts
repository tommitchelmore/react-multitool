import { useEffect, useRef } from 'react'

function useClickAway<T extends HTMLElement> (callback: () => void) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const handleClick = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return
      callback()
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  return ref
}

export default useClickAway
