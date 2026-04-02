import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('Educa 24/7 landing page', () => {
  it('renders the new industrial hero content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /formación, certificación y control hse para operaciones que no pueden improvisar/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /ver servicios/i })).toHaveAttribute('href', '#servicios')
    expect(
      screen.getByRole('img', {
        name: /operario con casco naranja inspeccionando maquinaria industrial de gran tamaño/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders header navigation with the new anchors', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Inicio' })[0]).toHaveAttribute('href', '#inicio')
    expect(screen.getAllByRole('link', { name: 'Servicios' })[0]).toHaveAttribute('href', '#servicios')
    expect(screen.getAllByRole('link', { name: 'Programas' })[0]).toHaveAttribute('href', '#programas')
    expect(screen.getAllByRole('link', { name: 'Empresas' })[0]).toHaveAttribute('href', '#empresas')
    expect(screen.getAllByRole('link', { name: 'Sectores' })[0]).toHaveAttribute('href', '#sectores')
    expect(screen.getAllByRole('link', { name: 'Contacto' })[0]).toHaveAttribute('href', '#contacto')
  })

  it('shows the four main service cards', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Certificaciones' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Capacitaciones HSE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mediciones' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Asesorías' })).toBeInTheDocument()
  })

  it('toggles faq accordion state', async () => {
    const user = userEvent.setup()
    render(<App />)

    const question = screen.getByRole('button', {
      name: /educa 24\/7 está pensado solo para cursos en línea/i,
    })

    expect(question).toHaveAttribute('aria-expanded', 'true')
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes the mobile menu after selecting a link', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getAllByRole('button', { name: /abrir menú/i })[0]
    await user.click(toggle)

    expect(screen.getByTestId('mobile-panel')).toBeInTheDocument()

    await user.click(screen.getByTestId('mobile-panel').querySelector('a[href="#inicio"]')!)

    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
  })
})
