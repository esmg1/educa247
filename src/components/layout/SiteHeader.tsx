import { ChevronDown, Factory, Menu, X } from 'lucide-react'
import { startTransition, useEffect, useEffectEvent, useRef, useState } from 'react'

import type { NavLink } from '../../data/landingContent'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

interface SiteHeaderProps {
  navLinks: NavLink[]
}

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [hasShadow, setHasShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesMenuRef = useRef<HTMLDivElement | null>(null)

  const syncShadow = useEffectEvent(() => {
    setHasShadow(window.scrollY > 12)
  })

  const closeMenus = useEffectEvent(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  })

  useEffect(() => {
    syncShadow()
    window.addEventListener('scroll', syncShadow, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncShadow)
    }
  }, [syncShadow])

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        servicesMenuRef.current &&
        event.target instanceof Node &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  function closeMobileMenu() {
    startTransition(() => {
      closeMenus()
    })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/8 bg-educa-charcoal/88 text-white backdrop-blur-xl transition-shadow duration-300',
        hasShadow && 'shadow-[0_14px_40px_rgba(24,21,18,0.28)]',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenus}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-educa-red to-educa-orange text-white shadow-edge">
            <Factory className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Plataforma industrial
            </div>
            <div className="text-lg font-extrabold tracking-tight text-white">Educa 24/7</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            if (!link.children?.length) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                  onClick={closeMenus}
                >
                  {link.label}
                </a>
              )
            }

            return (
              <div key={link.href} ref={servicesMenuRef} className="relative">
                <div className="flex items-center gap-1">
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-slate-300 transition hover:text-white"
                    onClick={closeMenus}
                  >
                    {link.label}
                  </a>
                  <button
                    type="button"
                    aria-label="Abrir panel de servicios"
                    aria-expanded={isServicesOpen}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-orange-300 hover:text-white"
                    onClick={() => setIsServicesOpen((current) => !current)}
                  >
                    <ChevronDown className={cn('h-4 w-4 transition', isServicesOpen && 'rotate-180')} />
                  </button>
                </div>

                {isServicesOpen ? (
                  <div
                    data-testid="desktop-services-panel"
                    className="absolute right-0 top-full mt-3 w-72 rounded-[28px] border border-white/10 bg-educa-charcoal p-4 shadow-panel"
                  >
                    <a
                      href={link.href}
                      className="mb-3 block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:bg-white/5"
                      onClick={closeMenus}
                    >
                      Ver todos los servicios
                    </a>
                    <div className="space-y-2">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-300 hover:bg-white/5 hover:text-white"
                          onClick={closeMenus}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#servicios" variant="secondary" size="sm">
            Ver servicios
          </Button>
          <Button href="#contacto" size="sm">
            Solicitar contacto
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:border-orange-300 hover:text-orange-200 lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          data-testid="mobile-panel"
          className="border-t border-white/8 bg-educa-charcoal px-4 py-4 shadow-panel lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Menú Educa 24/7
            </div>
            {navLinks.map((link) => (
              <div key={link.href} className="rounded-[28px] border border-white/10 bg-white/5 p-2">
                <a
                  href={link.href}
                  className="block rounded-2xl px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
                {link.children?.length ? (
                  <div className="grid gap-2 px-2 pb-2">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-300 hover:bg-white/5 hover:text-white"
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <Button href="#servicios" variant="secondary" className="justify-center" onClick={closeMobileMenu}>
                Ver servicios
              </Button>
              <Button href="#contacto" className="justify-center" onClick={closeMobileMenu}>
                Solicitar contacto
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
