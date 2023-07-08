import * as Dialog from '@radix-ui/react-dialog'
import { VideoBanner } from '.'
import { render, screen } from '@testing-library/react'

describe('Component > VideoBanner', () => {
  it('should be view element on main component', () => {
    const { container } = render(
      <Dialog.Root>
        <VideoBanner title="VideoBanner Title" />
      </Dialog.Root>,
    )

    expect(screen.getByText('VideoBanner Title')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
