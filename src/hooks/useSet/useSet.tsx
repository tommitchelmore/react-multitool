import { useCallback, useMemo, useState } from 'react'

function useSet<T = any> () {
  const [state, setState] = useState<T[]>([])

  const add = useCallback((el: T) => {
    if (!state.includes(el)) setState([...state, el])
  }, [state])

  const remove = useCallback((el: T) => {
    setState(state.filter(e => e !== el))
  }, [state])

  const contains = useCallback((el: T) => {
    return state.includes(el)
  }, [state])

  const size = useMemo(() => state.length, [state])

  return {
    add,
    remove,
    contains,
    size
  }
}

export default useSet
