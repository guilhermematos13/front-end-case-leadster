import { Footer } from '.'
import { render, screen } from '@testing-library/react'

describe('Component > Footer', () => {
  it('should be view element on footer', () => {
    const { container } = render(<Footer />)

    const spanElement = container.querySelector('span')
    const paragraphElement = container.querySelector('p')
    const imageElement = container.querySelector('img')

    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(
      screen.getByText('Transformando visitantes em clientes.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Links Príncipais')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Rua José Loureiro - 464 - Centro - Curitiba PR - CEP: 80010-000 | Temos de uso.',
      ),
    ).toBeInTheDocument()
    expect(spanElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(imageElement?.getAttribute('src')).toContain(
      'next/image?url=%2Fimg.jpg&w=96&q=75',
      /// ../../../public/leadster_logo_gif.gif
    )
  })
})
