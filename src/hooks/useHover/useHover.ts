import { useEffect, useRef, useState } from 'react'

function useHover <T extends HTMLElement> () {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return
    const onMouseOver = () => setHovered(true)
    const onMouseOut = () => setHovered(false)

    ref.current.addEventListener('mouseover', onMouseOver)
    ref.current.addEventListener('mouseout', onMouseOut)

    return () => {
      if (!ref.current) return
      ref.current.removeEventListener('mouseover', onMouseOver)
      ref.current.removeEventListener('mouseout', onMouseOut)
    }
  })

  return [hovered, ref] as const
}

export default useHover
