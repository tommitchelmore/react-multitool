import { useState } from 'react'

function useQueue<T = any> () {
  const [state, setState] = useState<T[]>([])

  return {
    get head () { return state[0] },
    get tail () { return state[state.length - 1] },
    get size () { return state.length },
    enqueue: (el: T) => { setState(state => [...state, el]) },
    dequeue: () => {
      const _head = state[0]
      setState(([_, ...rest]) => rest)
      return _head
    }
  }
}

export default useQueue
