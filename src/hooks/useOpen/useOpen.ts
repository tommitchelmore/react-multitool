import { useState } from 'react'

/**
 * A hook that controls an opened/closed state.
 * @param {boolean} initialValue the initial value of the state.
 * @returns {[boolean, {open: () => void, close: () => void, toggle: () => void, set: (value: boolean) => void}]} the state and the functions to control it.
 */
function useOpen (initialValue: boolean): [boolean, { open: () => void; close: () => void; toggle: () => void; set: (value: boolean) => void; }] {
  const [state, setState] = useState(initialValue)

  const open = () => setState(true)
  const close = () => setState(false)
  const toggle = () => setState(!state)
  const set = (value: boolean) => setState(value)

  return [state, { open, close, toggle, set }]
}

export default useOpen
