import React from 'react'
import useClickAway from '../hooks/useClickAway/useClickAway'
import useOpen from '../hooks/useOpen/useOpen'

export default {
  title: 'useClickAway'
}

export const Default = () => {
  const [isOpen, { open, close }] = useOpen(false)
  const ref = useClickAway<HTMLDivElement>(close)

  return (
    <div
      style={{
        background: '#404040',
        height: '400px',
        width: '400px',
        display: 'grid',
        placeItems: 'center',
        position: 'relative'
      }}
    >
      <button onClick={open}>Open</button>

      {isOpen && (
        <div ref={ref} style={{ position: 'absolute', inset: '100px', background: '#FFFFFF80', fontFamily: 'sans-serif', padding: '16px' }}>
          Click away from me!
        </div>
      )}
    </div>
  )
}
