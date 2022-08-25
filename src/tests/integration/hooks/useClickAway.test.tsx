import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import useClickAway from '../../../hooks/useClickAway/useClickAway'

function TestComponent () {
  const [state, setState] = useState(false)
  const ref = useClickAway<HTMLDivElement>(() => { setState(true) })

  return (
    <div>
      <div role="outside">
        <p>Outside</p>
      </div>
      <div role="inside" ref={ref}>
        <p role="inside-child">Inside</p>
      </div>
      <div role="state">{state.toString()}</div>
    </div>
  )
}

test('callback is run on clicking away from ref', async () => {
  const user = userEvent.setup()

  render(<TestComponent />)

  user.click(screen.getByRole('outside'))

  // If anyone knows a better solution to this please make a PR :)
  await new Promise(resolve => setTimeout(resolve, 100))

  expect((await screen.findByRole('state')).innerHTML).toBe('true')
})

test('callback is not run on clicking ref', async () => {
  const user = userEvent.setup()

  render(<TestComponent />)

  user.click(screen.getByRole('inside'))

  // If anyone knows a better solution to this please make a PR :)
  await new Promise(resolve => setTimeout(resolve, 100))

  expect((await screen.findByRole('state')).innerHTML).toBe('false')
})

test('callback is not run on clicking ref child', async () => {
  const user = userEvent.setup()

  render(<TestComponent />)

  user.click(screen.getByRole('inside-child'))

  // If anyone knows a better solution to this please make a PR :)
  await new Promise(resolve => setTimeout(resolve, 100))

  expect((await screen.findByRole('state')).innerHTML).toBe('false')
})
