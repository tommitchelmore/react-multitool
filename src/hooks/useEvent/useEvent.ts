import { useEffect, useRef } from 'react'

function useEvent<E extends keyof globalThis.ElementEventMap, T extends HTMLElement = HTMLElement> (event: E, handler: (e: globalThis.ElementEventMap[E]) => void) {
  const ref = useRef<T>()

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    if (ref.current) {
      ref.current.addEventListener(event, handler)
    } else {
      window.addEventListener(event, handler)
    }

    return () => {
      ref.current?.removeEventListener(event, handler)
      window.removeEventListener(event, handler)
    }
  })

  return ref
}

export default useEvent
