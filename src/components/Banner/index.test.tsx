import { Banner } from '.'
import { render, screen } from '@testing-library/react'

describe('Component > Banner', () => {
  it('should be view element on banner', () => {
    const { container } = render(<Banner />)

    const h2 = screen.getByText('Menos Conversinha,')
    const h1 = screen.getByText('Mais Conversão')
    const paragraphElement = container.querySelector('p')
    const boldElement = container.querySelector('b')
    const spanElement = container.querySelector('span')

    expect(h2).toBeInTheDocument()
    expect(h1).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
    expect(boldElement).toBeInTheDocument()
    expect(spanElement).toBeInTheDocument()
  })
})
