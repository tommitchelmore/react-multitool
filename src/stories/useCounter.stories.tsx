import React from 'react'
import useCounter from '../hooks/useCounter/useCounter'

export default {
  title: 'useCounter',
  argTypes: {
    initial: {
      control: { type: 'number' }
    },
    limit: {
      control: { type: 'number' }
    },
    step: {
      control: { type: 'number' }
    },
    onLimit: {
      control: { type: 'boolean' }
    },
    resetOnLimit: {
      control: { type: 'boolean' }
    }
  }
}

export const Default = (args) => {
  const [count, increment, reset] = useCounter({
    initial: args.initial,
    limit: args.limit,
    step: args.step,
    onLimit: args.onLimit ? () => alert('Limit reached') : () => {},
    resetOnLimit: args.resetOnLimit
  })

  return (
    <div>
      <button onClick={ increment }>Increment</button>
      <button onClick={ reset }>Reset</button>
      <h1>{ count }</h1>
    </div>
  )
}
