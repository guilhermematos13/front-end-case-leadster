import userEvent from '@testing-library/user-event'
import { NavBanner } from '.'
import { render, screen } from '@testing-library/react'
import React, { Dispatch, useState } from 'react'

const setOrderFn = jest.fn()
const setFilterFn = jest.fn()
const setState: Dispatch<unknown> = jest.fn()

describe('Component > NavBanner', () => {
  it('should be view element on NavBanner component', () => {
    const { container } = render(
      <NavBanner setOrder={setOrderFn} setFilter={setFilterFn} />,
    )

    expect(container.querySelectorAll('button')).toHaveLength(5)
    expect(screen.getByTestId('select-ordered')).toBeInTheDocument()
  })

  it('should be click filter on NavBanner component (selected)', async () => {
    jest.spyOn(React, 'useState').mockReturnValue(['Agências', setState])

    render(<NavBanner setOrder={setOrderFn} setFilter={setFilterFn} />)

    const button = screen.getByText('Agências')

    await userEvent.click(button)
  })

  it('should be click filter on NavBanner component (unselected)', async () => {
    jest.spyOn(React, 'useState').mockReturnValue(['Diferent Option', setState])

    render(<NavBanner setOrder={setOrderFn} setFilter={setFilterFn} />)

    const button = screen.getByText('Agências')

    await userEvent.click(button)
  })

  it('should be click filter on NavBanner component (date)', async () => {
    jest.spyOn(React, 'useState').mockReturnValue(['date', useState])

    render(<NavBanner setOrder={setOrderFn} setFilter={setFilterFn} />)
  })
})
