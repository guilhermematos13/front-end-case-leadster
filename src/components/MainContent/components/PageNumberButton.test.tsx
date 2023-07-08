import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PageNumberButton } from './PageNumberButton'

describe('Component > Button', () => {
  it('should be view element on page number button', async () => {
    render(<PageNumberButton number="1" />)

    const button = screen.getByText('1')

    await userEvent.click(button)

    expect(button).toBeInTheDocument()
  })
})
