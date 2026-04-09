import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'
import { aboutSection, catalogSections, contactDetails, heroBanner } from '../data/landingContent'

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

const hiddenCatalogDescriptions = [
  'Ruta orientada a control preventivo, supervisión y ejecución segura en obra.',
  'Entrenamiento sobre inspección, anclajes, ejecución y control de tareas en altura.',
  'Evaluación de presencia de partículas en ambientes de trabajo y frentes de operación.',
  'Soporte para análisis, documentación y planes de acción posteriores al evento.',
]

describe('Educa 24/7 landing page', () => {
  it('renders the new flat navigation with exact menu order and a visual-only search box', () => {
    render(<App />)

    const desktopNav = screen.getByTestId('desktop-nav')
    const navLinks = within(desktopNav).getAllByRole('link')

    expect(navLinks.map((link) => link.textContent?.trim())).toEqual([
      'Inicio',
      '¿Quiénes Somos?',
      'Servicios',
      'Blog',
      'Aula Virtual',
      'Recursos para Descargar',
      'Contáctanos',
    ])

    expect(navLinks.map((link) => link.getAttribute('href'))).toEqual([
      '#inicio',
      '#quienes-somos',
      '#servicios',
      '#blog',
      '#aula-virtual',
      '#descargas',
      '#contacto',
    ])

    const search = screen.getByPlaceholderText('Buscar...')
    expect(search).toHaveAttribute('readonly')
    expect(screen.queryByTestId('desktop-services-panel')).not.toBeInTheDocument()
    expect(within(desktopNav).queryByRole('link', { name: 'Capacitaciones' })).not.toBeInTheDocument()
  })

  it('renders the Igualdad-led homepage sections and removes the old clients/resources structure', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { name: heroBanner.title, level: 1 }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: '¿Quiénes Somos?' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Servicios' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Blog' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Aula Virtual' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Recursos para Descargar' }).length).toBeGreaterThan(0)

    const contactSection = document.querySelector('#contacto')
    expect(contactSection).not.toBeNull()
    expect(within(contactSection as HTMLElement).getAllByText('Contáctanos').length).toBeGreaterThan(0)

    expect(screen.queryByText('Clientes y sectores')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', {
        name: 'Recursos de apoyo para activar conversaciones comerciales y documentales',
      }),
    ).not.toBeInTheDocument()
  })

  it('renders the team profiles inside quienes somos without team photos', () => {
    render(<App />)

    const about = document.querySelector('#quienes-somos')
    expect(about).not.toBeNull()

    const aboutScope = within(about as HTMLElement)

    aboutSection.teamMembers.forEach((member) => {
      expect(aboutScope.getByRole('heading', { name: member.name })).toBeInTheDocument()
      expect(aboutScope.getByText(member.role)).toBeInTheDocument()
      expect(aboutScope.getByText(member.summary)).toBeInTheDocument()
    })

    expect(aboutScope.getAllByRole('img')).toHaveLength(2)
  })

  it('keeps the four service catalogs image-led under servicios', () => {
    render(<App />)

    certificationTitles.forEach((title) => {
      expect(screen.getAllByRole('heading', { name: title }).length).toBeGreaterThan(0)
    })

    trainingTitles.forEach((title) => {
      expect(screen.getAllByRole('heading', { name: title }).length).toBeGreaterThan(0)
    })
  })

  it('renders one image per catalog course and removes visible catalog body copy', () => {
    const { container, getAllByText, getAllByAltText, queryByText } = render(<App />)

    const totalItems = catalogSections.reduce((count, section) => count + section.items.length, 0)
    const uniqueCatalogAlts = new Set(
      Array.from(container.querySelectorAll('[data-testid="catalog-image"]')).map((image) =>
        image.getAttribute('alt'),
      ),
    )

    expect(uniqueCatalogAlts.size).toBe(totalItems)

    catalogSections.forEach((section) => {
      section.items.forEach((item) => {
        expect(getAllByText(item.title).length).toBeGreaterThan(0)
        expect(getAllByAltText(item.imageAlt).length).toBeGreaterThan(0)
      })
    })

    hiddenCatalogDescriptions.forEach((description) => {
      expect(queryByText(description)).not.toBeInTheDocument()
    })
  })

  it('renders the premium Igualdad course, the secondary Evaluación Docente course, and the embedded video', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { name: 'Blog' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Aula Virtual' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Igualdad 2026' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Evaluación Docente 2026' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Recursos para Descargar' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Verificación de certificados' }).length).toBeGreaterThan(0)

    const [iframe] = screen.getAllByTitle('Video Igualdad 2026')
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/v5pNmXDfI8Q')
    expect(container.querySelector('[data-testid="igualdad-video"] iframe')).not.toBeNull()
  })

  it('renders the requested social and whatsapp links in contact and footer areas', () => {
    render(<App />)

    const contactSection = document.querySelector('#contacto')
    expect(contactSection).not.toBeNull()
    const footer = document.querySelector('footer')
    expect(footer).not.toBeNull()

    const contactHrefs = within(contactSection as HTMLElement)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
    const footerHrefs = within(footer as HTMLElement)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))

    contactDetails.forEach((detail) => {
      expect(contactHrefs).toContain(detail.href)
      expect(footerHrefs).toContain(detail.href)
    })
  })

  it('opens and closes the flat mobile menu after selecting a top-level link', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getAllByRole('button', { name: /abrir menú/i })[0]
    await user.click(toggle)

    const mobilePanel = screen.getByTestId('mobile-panel')
    expect(mobilePanel).toBeInTheDocument()
    expect(within(mobilePanel).getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(within(mobilePanel).queryByRole('link', { name: 'Capacitaciones' })).not.toBeInTheDocument()

    await user.click(within(mobilePanel).getByRole('link', { name: 'Blog' }))

    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
  })
})
