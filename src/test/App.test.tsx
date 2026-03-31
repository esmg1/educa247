import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('CASST landing page', () => {
  it('renders the main hero content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /formacion profesional en seguridad industrial/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders header navigation with expected anchors', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Inicio' })[0]).toHaveAttribute('href', '#inicio')
    expect(screen.getAllByRole('link', { name: 'Cursos' })[0]).toHaveAttribute('href', '#cursos')
    expect(screen.getAllByRole('link', { name: 'Para Empresas' })[0]).toHaveAttribute('href', '#empresas')
    expect(screen.getAllByRole('link', { name: 'Metodologia' })[0]).toHaveAttribute('href', '#metodologia')
    expect(screen.getAllByRole('link', { name: 'Equipo' })[0]).toHaveAttribute('href', '#equipo')
    expect(screen.getAllByRole('link', { name: 'Contacto' })[0]).toHaveAttribute('href', '#contacto')
  })

  it('switches hero content when audience changes', async () => {
    const user = userEvent.setup()
    render(<App />)

    const audienceToggle = screen.getAllByRole('button', { name: 'Empresas' })[0]
    await user.click(audienceToggle)

    expect(audienceToggle).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByText(/panel para coordinadores/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /ver solucion empresarial/i })).toHaveAttribute('href', '#empresas')
  })

  it('toggles faq accordion state', async () => {
    const user = userEvent.setup()
    render(<App />)

    const question = screen.getAllByRole('button', {
      name: /la plataforma sirve para empresas/i,
    })[0]

    expect(question).toHaveAttribute('aria-expanded', 'false')
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
  })

  it('opens and closes the mobile menu after selecting a link', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getAllByRole('button', { name: /abrir menu/i })[0]
    await user.click(toggle)

    expect(screen.getByTestId('mobile-panel')).toBeInTheDocument()

    await user.click(screen.getByTestId('mobile-panel').querySelector('a[href="#inicio"]')!)

    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
  })
})
