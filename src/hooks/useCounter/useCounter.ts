import { useState } from 'react'

type CounterOptions = {
  initial?: number
  limit?: number
  step?: number
  onLimit?: () => void
  resetOnLimit?: boolean
}

function useCounter (options?: CounterOptions) {
  const [state, setState] = useState(options?.initial || 0)

  const increment = () => {
    if (state === options?.limit) return
    setState(state => state + (options?.step || 1))

    if (state === options?.limit) {
      if (options.onLimit) options.onLimit()
      if (options.resetOnLimit) setState(options.initial || 0)
    }
  }

  const reset = () => {
    setState(options?.initial || 0)
  }

  return [state, increment, reset] as const
}

export default useCounter
