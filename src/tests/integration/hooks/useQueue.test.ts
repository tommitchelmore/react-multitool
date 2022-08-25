import { act, renderHook } from '@testing-library/react'
import useQueue from '../../../hooks/useQueue/useQueue'

test('it should initialise to an empty queue', () => {
  const { result } = renderHook(() => useQueue())

  expect(result.current.size).toEqual(0)
})

test('enqueue should add an item to the queue', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    result.current.enqueue(1)
  })

  expect(result.current.size).toEqual(1)
})

test('dequeue should remove an item from the queue', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    result.current.enqueue(1)
    result.current.enqueue(2)
    result.current.dequeue()
  })

  expect(result.current.size).toEqual(1)
})

test('dequeue should return the dequeued item', () => {
  const { result } = renderHook(() => useQueue<number>(), {})

  act(() => {
    result.current.enqueue(1)
    result.current.enqueue(2)
    setTimeout(() => {
      expect(result.current.dequeue()).toBe(1)
    }, 10)
  })
})

test('dequeue should return undefined if the queue is empty', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    expect(result.current.dequeue()).toBeUndefined()
  })
})

test('head should return the first item in the queue', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    result.current.enqueue(1)
    result.current.enqueue(2)
  })

  expect(result.current.head).toEqual(1)
})

test('head should return undefined if the queue is empty', () => {
  const { result } = renderHook(() => useQueue<number>())

  expect(result.current.head).toBeUndefined()
})

test('tail should return the last item in the queue', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    result.current.enqueue(1)
    result.current.enqueue(2)
  })

  expect(result.current.tail).toEqual(2)
})

test('tail should return undefined if the queue is empty', () => {
  const { result } = renderHook(() => useQueue<number>())

  expect(result.current.tail).toBeUndefined()
})

test('size should return the size of the queue', () => {
  const { result } = renderHook(() => useQueue<number>())

  act(() => {
    result.current.enqueue(1)
  })

  expect(result.current.size).toEqual(1)
})
