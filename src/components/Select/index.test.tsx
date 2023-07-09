import React, { Dispatch } from 'react'
import { Select } from '.'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const setSelectedItemFn = jest.fn()
const setState: Dispatch<unknown> = jest.fn()

describe('Component > Select', () => {
  const renderComponent = () => {
    render(
      <Select
        title="Select Test"
        options={[
          { value: 'test', label: 'test' },
          { value: 'test1', label: 'test1' },
        ]}
        placeholder="placeholder test"
        setSelectedItem={setSelectedItemFn}
        selectedItem={undefined}
      />,
    )
  }

  it('should be view element on main component', () => {
    renderComponent()
    expect(screen.getByText('Select Test')).toBeInTheDocument()
    expect(screen.getByText('placeholder test')).toBeInTheDocument()
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('test1')).toBeInTheDocument()
  })

  it('should be view element on main component', async () => {
    const useStateSpy = jest
      .spyOn(React, 'useState')
      .mockReturnValue([false, setState])

    renderComponent()

    const option = screen.getByTestId('select-header')

    await userEvent.click(option)

    expect(useStateSpy).toHaveBeenCalled()
  })
})
