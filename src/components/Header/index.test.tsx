import { Header } from '.'
import { render } from '@testing-library/react'

describe('Component > Header', () => {
  it('should be view element on header', () => {
    const { container } = render(<Header />)

    const imageElement = container.querySelector('img')
    const imageElementAll = container.querySelectorAll('img')

    expect(imageElement).toBeInTheDocument()
    expect(imageElementAll.length).toBe(1)
  })
})
