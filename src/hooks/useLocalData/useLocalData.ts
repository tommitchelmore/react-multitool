import { useState } from 'react'

function useLocalData<T = any> (key: string, initialValue: T): [T, (value: T) => void] {
  const [state, updateState] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setState = (value: T | ((previous: T) => T)) => {
    const newValue = value instanceof Function ? value(state) : value

    updateState(newValue)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return [state, setState]
}

export default useLocalData
