import { act, renderHook } from '@testing-library/react'
import useOpen from '../../../hooks/useOpen/useOpen'

test('should initialise to default value', () => {
  const { result } = renderHook(() => useOpen(false))

  expect(result.current[0]).toBe(false)
})

test('open should set state to true', () => {
  const { result } = renderHook(() => useOpen(false))

  act(() => {
    result.current[1].open()
  })

  expect(result.current[0]).toBe(true)
})

test('close should set state to false', () => {
  const { result } = renderHook(() => useOpen(true))

  act(() => {
    result.current[1].close()
  })

  expect(result.current[0]).toBe(false)
})

test('toggle should set state to opposite of current state', () => {
  const { result } = renderHook(() => useOpen(false))

  act(() => {
    result.current[1].toggle()
  })

  expect(result.current[0]).toBe(true)
})

test('set should set state to given value', () => {
  const { result } = renderHook(() => useOpen(false))

  act(() => {
    result.current[1].set(true)
  })

  expect(result.current[0]).toBe(true)
})
