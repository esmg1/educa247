import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

const certificationTitles = [
  'Prevención de Riesgos Laborales: Construcción y Obras Públicas',
  'Prevención de Riesgos Laborales: Energía Eléctrica',
  'Asistencia en Seguridad Industrial',
  'Formación de Formadores',
  'Instalación de Equipos y Máquinas Eléctricas',
  'Instalaciones Eléctricas',
]

const trainingTitles = [
  'Prevención de Trabajos en Alturas',
  'Trabajos en Espacios Confinados',
  'Trabajos Peligrosos',
  'Prevención en el Manejo de H2S',
  'Prevención de Riesgos Eléctricos',
  'Bloqueo y Etiquetado',
]

describe('Educa 24/7 landing page', () => {
  it('renders the tabbed hero and switches between service pillars', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Certificaciones por competencias laborales',
      }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /capacitaciones/i }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Capacitaciones 100% prácticas en HSE',
      }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /mediciones/i }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Mediciones de factores de riesgo laboral',
      }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /asesorías/i }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Asesorías y consultorías en seguridad y salud ocupacional',
      }),
    ).toBeInTheDocument()
  })

  it('renders grouped navigation with service child anchors', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Inicio' })[0]).toHaveAttribute('href', '#inicio')
    expect(screen.getAllByRole('link', { name: 'Servicios' })[0]).toHaveAttribute('href', '#servicios')
    expect(screen.getAllByRole('link', { name: 'Recursos' })[0]).toHaveAttribute('href', '#recursos')
    expect(screen.getAllByRole('link', { name: 'Clientes' })[0]).toHaveAttribute('href', '#clientes')
    expect(screen.getAllByRole('link', { name: 'Contacto' })[0]).toHaveAttribute('href', '#contacto')

    await user.click(screen.getAllByRole('button', { name: /abrir panel de servicios/i })[0])

    const servicesPanel = screen.getByTestId('desktop-services-panel')

    expect(within(servicesPanel).getByRole('link', { name: /ver todos los servicios/i })).toHaveAttribute(
      'href',
      '#servicios',
    )
    expect(within(servicesPanel).getByRole('link', { name: 'Certificaciones' })).toHaveAttribute(
      'href',
      '#certificaciones',
    )
    expect(within(servicesPanel).getByRole('link', { name: 'Capacitaciones' })).toHaveAttribute(
      'href',
      '#capacitaciones',
    )
    expect(within(servicesPanel).getByRole('link', { name: 'Mediciones' })).toHaveAttribute(
      'href',
      '#mediciones',
    )
    expect(within(servicesPanel).getByRole('link', { name: 'Asesorías' })).toHaveAttribute(
      'href',
      '#asesorias',
    )
  })

  it('renders the exact certification and training catalog titles', () => {
    render(<App />)

    certificationTitles.forEach((title) => {
      expect(screen.getAllByRole('heading', { name: title }).length).toBeGreaterThan(0)
    })

    trainingTitles.forEach((title) => {
      expect(screen.getAllByRole('heading', { name: title }).length).toBeGreaterThan(0)
    })
  })

  it('renders resources, clients and certificate verification blocks', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { name: 'Catálogo de servicios' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Clientes y sectores' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Verificación de certificados' }).length).toBeGreaterThan(0)
  })

  it('opens and closes the mobile menu after selecting a nested service link', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getAllByRole('button', { name: /abrir menú/i })[0]
    await user.click(toggle)

    const mobilePanel = screen.getByTestId('mobile-panel')
    expect(mobilePanel).toBeInTheDocument()

    await user.click(within(mobilePanel).getByRole('link', { name: 'Capacitaciones' }))

    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
  })
})
