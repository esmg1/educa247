import { Menu, ShieldCheck, X } from 'lucide-react'
import { startTransition, useEffect, useEffectEvent, useState } from 'react'

import type { NavLink } from '../../data/landingContent'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

interface SiteHeaderProps {
  navLinks: NavLink[]
}

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [hasShadow, setHasShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const syncShadow = useEffectEvent(() => {
    setHasShadow(window.scrollY > 12)
  })

  useEffect(() => {
    syncShadow()
    window.addEventListener('scroll', syncShadow, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncShadow)
    }
  }, [])

  function closeMenu() {
    startTransition(() => {
      setIsMenuOpen(false)
    })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-shadow duration-300',
        hasShadow && 'shadow-[0_14px_40px_rgba(15,39,66,0.08)]',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-casst-navy text-white shadow-float">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-casst-slate">
              Plataforma de formacion
            </div>
            <div className="text-lg font-extrabold tracking-tight text-casst-ink">
              CASST
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-casst-slate transition hover:text-casst-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#cursos" variant="secondary" size="sm">
            Ver cursos
          </Button>
          <Button href="#contacto" size="sm">
            Solicitar demo
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-casst-navy transition hover:border-casst-amber hover:text-casst-amber lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          data-testid="mobile-panel"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-panel lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-casst-slate">
              Menu CASST
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-casst-ink transition hover:border-casst-amber hover:bg-amber-50"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <Button href="#cursos" variant="secondary" className="justify-center" onClick={closeMenu}>
                Ver cursos
              </Button>
              <Button href="#contacto" className="justify-center" onClick={closeMenu}>
                Solicitar demo
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
