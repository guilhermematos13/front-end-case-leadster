import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('Component > Button', () => {
  const mockButtonClick = jest.fn()
  it('should be view element on button', async () => {
    render(<Button title="Teste" />)

    const button = screen.getByText('Teste')

    await userEvent.click(button)

    expect(button).toBeInTheDocument()

    waitFor(() => {
      expect(mockButtonClick).toHaveBeenCalled()
    })
  })
})
