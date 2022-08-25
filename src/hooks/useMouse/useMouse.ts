import { useCallback, useEffect, useRef, useState } from 'react'

function useMouse<T extends HTMLElement = HTMLElement> () {
  const ref = useRef<T>()

  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handlePointerMove = useCallback((event: globalThis.PointerEvent) => {
    setPos({ x: event.clientX, y: event.clientY })
  }, [])

  useEffect(() => {
    if (!ref.current && typeof window !== 'undefined') return

    if (ref.current) {
      ref.current.addEventListener('pointermove', handlePointerMove)
    } else {
      window.addEventListener('pointermove', handlePointerMove)
    }

    return () => {
      ref.current?.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  })

  return [ref, {
    ...pos
  }]
}

export default useMouse
