import { useCallback, useMemo, useState } from 'react'

function useQueue<T = any> () {
  const [state, setState] = useState<T[]>([])

  const enqueue = useCallback((el: T) => {
    setState([...state, el])
  }, [state])

  const dequeue = useCallback(() => {
    setState(state.slice(1))
  }, [state])

  const size = useMemo(() => state.length, [state])

  const head = useMemo(() => state[0], [state])

  const tail = useMemo(() => state[state.length - 1], [state])

  return {
    head,
    tail,
    size,
    enqueue,
    dequeue
  }
}

export default useQueue
