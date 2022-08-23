import React from 'react'
import useOpen from '../hooks/useOpen/useOpen'

export default {
  title: 'useOpen'
}

export const Default = () => {
  const [isOpen, { open, close, toggle }] = useOpen(false)

  return (
    <>
      <button onClick={open}>Open</button>
      <button onClick={close}>Close</button>
      <button onClick={toggle}>Toggle</button>

      {isOpen && (
        <div style={{ background: '#404040', fontFamily: 'sans-serif', color: '#ffffff', padding: '16px', margin: '16px 0 0 0' }}>
          Opened!
        </div>
      )}
    </>
  )
}
