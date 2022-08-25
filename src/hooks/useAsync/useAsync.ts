import { useState } from 'react'

type UseAsyncOptions = {
  immediate?: boolean
  allowConcurrent?: boolean
}

function useAsync<T = any> (callback: () => Promise<T>, { immediate = false, allowConcurrent = true }: UseAsyncOptions) {
  const [value, setValue] = useState<T>()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<Error>()

  const execute = () => {
    if (!allowConcurrent && pending) return

    setPending(true)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setPending(false))
  }

  if (immediate) {
    execute()
  }

  return { execute, value, pending, error }
}

export default useAsync
