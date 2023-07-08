import { FooterBanner } from '.'
import { render, screen } from '@testing-library/react'

describe('Component > FooterBanner', () => {
  it('should be view element on footer banner', () => {
    const { container } = render(<FooterBanner />)

    const boldElement = container.querySelector('b')
    const paragraphElement = container.querySelector('p')
    const imageElement = container.querySelector('img')
    const imageElementAll = container.querySelectorAll('img')

    expect(screen.getByText('Pronto para triplicar sua')).toBeInTheDocument()
    expect(screen.getByText('Geração de Leads?')).toBeInTheDocument()
    expect(boldElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(imageElementAll.length).toBe(4)
  })
})
