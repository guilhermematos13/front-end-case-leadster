import { MainContent } from '.'
import { setupServer } from 'msw/node'

import { act, render, screen, waitFor } from '@testing-library/react'
import { handlers } from '@/mock/handlers'
import * as Dialog from '@radix-ui/react-dialog'

const server = setupServer(...handlers)

describe('Component > MainContent ', () => {
  beforeAll(() => server.listen())
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  it('should be view element on MainContent component (success API)', async () => {
    server.use(handlers[0])

    act(() =>
      render(
        <Dialog.Root>
          <MainContent />
        </Dialog.Root>,
      ),
    )

    await waitFor(() => {
      expect(screen.getByText('Página'))
      expect(
        screen.getByText(
          'Por que o Marketing Conversacional é a grande tendência de 2023?',
        ),
      ).toBeDefined()
      expect(
        screen.getByText(
          'Os passos do Marketing Digital para Startups (Webinar completo)',
        ),
      ).toBeDefined()
    })
  })
})
