import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'
import {
  aboutSection,
  catalogSections,
  contactDetails,
  heroBanner,
  navLinks,
} from '../data/landingContent'

describe('EDUCA 24/7 website', () => {
  it('provides the branded header and navigation without an inactive search field', () => {
    render(<App />)
    const nav = within(screen.getByTestId('desktop-nav')).getAllByRole('link')
    expect(nav.map((link) => link.textContent)).toEqual(
      navLinks.map((link) => link.label),
    )
    expect(nav.map((link) => link.getAttribute('href'))).toEqual(
      navLinks.map((link) => link.href),
    )
    expect(
      screen.getByRole('link', { name: 'EDUCA 24/7 — Inicio' }),
    ).toHaveAttribute('href', '#inicio')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('keeps all in-page links connected to an existing section', () => {
    const { container } = render(<App />)
    expect(
      screen.getByRole('heading', { name: heroBanner.title, level: 1 }),
    ).toBeInTheDocument()
    container.querySelectorAll('a[href^="#"]').forEach((link) => {
      const id = link.getAttribute('href')!.slice(1)
      expect(container.querySelector(`[id="${id}"]`), id).not.toBeNull()
    })
    const ids = [...container.querySelectorAll('[id]')].map((el) => el.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('preserves every team member name, role and biography', () => {
    render(<App />)
    const about = within(
      document.querySelector('#quienes-somos') as HTMLElement,
    )
    aboutSection.teamMembers.forEach((member) => {
      expect(
        about.getByRole('heading', { name: member.name }),
      ).toBeInTheDocument()
      expect(about.getByText(member.role)).toBeInTheDocument()
      expect(about.getByText(member.summary)).toBeInTheDocument()
    })
    expect(about.getAllByRole('img')).toHaveLength(2)
  })

  it('shows every existing catalog service with its description and image', () => {
    render(<App />)
    catalogSections.forEach((section) => {
      const scope = within(document.getElementById(section.id)!)
      section.items.forEach((item) => {
        expect(
          scope.getByRole('heading', { name: item.title }),
        ).toBeInTheDocument()
        expect(scope.getByText(item.description)).toBeInTheDocument()
        expect(scope.getByAltText(item.imageAlt)).toHaveAttribute(
          'src',
          item.imageSrc,
        )
      })
    })
  })

  it('uses the supplied LOTO photograph in the hero, training and editorial card', () => {
    const { container } = render(<App />)
    const heroImage = within(document.getElementById('inicio')!).getByRole(
      'img',
    )
    const lotoImage = within(
      document.getElementById('capacitaciones')!,
    ).getByAltText(
      'Trabajadora aplicando bloqueo y etiquetado LOTO a un tablero eléctrico.',
    )
    expect(heroImage.getAttribute('src')).toBe(lotoImage.getAttribute('src'))
    expect(
      [...container.querySelectorAll('#blog img')].some(
        (img) => img.getAttribute('src') === lotoImage.getAttribute('src'),
      ),
    ).toBe(true)
  })

  it('explains SST routes, the work process and equality topics', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: 'Tu gestión SST, con una ruta clara.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Construir tu sistema' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Dar continuidad a la gestión' }),
    ).toBeInTheDocument()
    expect(screen.getByText('40 horas')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Trabajo de igual valor' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Prevención de violencia y discriminación',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Evaluación Docente 2026' }),
    ).toBeInTheDocument()
    expect(screen.getByTitle('Video Igualdad 2026')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/v5pNmXDfI8Q',
    )
  })

  it('preserves contact channels and makes the catalogue and certificate actions usable', () => {
    render(<App />)
    const contact = within(document.getElementById('contacto')!)
    const footer = within(document.querySelector('footer')!)
    contactDetails.forEach((detail) => {
      expect(
        contact
          .getAllByRole('link')
          .some((link) => link.getAttribute('href') === detail.href),
      ).toBe(true)
      expect(
        footer
          .getAllByRole('link')
          .some((link) => link.getAttribute('href') === detail.href),
      ).toBe(true)
    })
    expect(
      contact
        .getByRole('link', { name: 'Solicitar catálogo' })
        .getAttribute('href'),
    ).toMatch(/^https:\/\/wa.me\/593993432822\?text=/)
    expect(
      contact
        .getByRole('link', { name: 'Verificación de certificados' })
        .getAttribute('href'),
    ).toMatch(/^https:\/\/wa.me\/593993432822\?text=/)
  })

  it('opens the mobile menu and closes it after selecting a link or pressing Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))
    const panel = screen.getByTestId('mobile-panel')
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.click(within(panel).getByRole('link', { name: 'Servicios' }))
    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByTestId('mobile-panel')).not.toBeInTheDocument()
  })
})
