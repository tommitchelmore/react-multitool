import React from 'react'
import useHover from '../hooks/useHover/useHover'

export default {
  title: 'useHover'
}

export const Default = () => {
  const [hovered, ref] = useHover<HTMLDivElement>()

  return (
    <>
      <div ref={ref}>
        Hover me!
      </div>

      {hovered && (
        <div>
          Hovered!
        </div>
      )}
    </>
  )
}
