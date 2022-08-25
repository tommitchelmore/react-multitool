import { useState } from 'react'

type UseAsyncOptions = {
  immediate?: boolean
  allowConcurrent?: boolean
}

function useAsync<T = any> (callback: () => Promise<T>, { immediate = false, allowConcurrent = true }: UseAsyncOptions) {
  const [data, setData] = useState<T>()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<Error>()

  const execute = () => {
    if (!allowConcurrent && pending) return

    setPending(true)
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setPending(false))
  }

  if (immediate) {
    execute()
  }

  return { execute, data, pending, error }
}

export default useAsync
