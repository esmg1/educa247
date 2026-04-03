import { Factory, Menu, Search, X } from 'lucide-react'
import { startTransition, useEffect, useEffectEvent, useState } from 'react'

import type { NavLink } from '../../data/landingContent'
import { cn } from '../../lib/cn'

interface SiteHeaderProps {
  navLinks: NavLink[]
}

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [hasShadow, setHasShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const syncShadow = useEffectEvent(() => {
    setHasShadow(window.scrollY > 10)
  })

  const closeMenu = useEffectEvent(() => {
    setIsMenuOpen(false)
  })

  useEffect(() => {
    syncShadow()
    window.addEventListener('scroll', syncShadow, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncShadow)
    }
  }, [syncShadow])

  function handleNavSelect() {
    startTransition(() => {
      closeMenu()
    })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-black/6 bg-white/95 text-educa-ink backdrop-blur-xl transition-shadow duration-300',
        hasShadow && 'shadow-[0_18px_44px_rgba(24,21,18,0.12)]',
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-educa-red to-educa-orange text-white shadow-edge">
            <Factory className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Educa 24/7
            </div>
            <div className="text-lg font-extrabold tracking-tight text-educa-ink">Plataforma industrial</div>
          </div>
        </a>

        <nav
          aria-label="Principal"
          data-testid="desktop-nav"
          className="hidden items-center gap-8 xl:flex"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-[1.05rem] font-medium transition hover:text-educa-red',
                index === 0 ? 'text-educa-red' : 'text-educa-ink',
              )}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <label className="flex h-12 min-w-[220px] items-center gap-3 rounded-none border border-stone-300 bg-[#faf7f2] px-4 text-sm text-slate-500 shadow-[0_8px_20px_rgba(24,21,18,0.04)]">
            <Search className="h-5 w-5 text-stone-400" />
            <input
              type="search"
              aria-label="Buscar"
              placeholder="Buscar..."
              readOnly
              className="w-full border-0 bg-transparent p-0 text-sm font-semibold text-educa-ink placeholder:text-stone-400 focus:outline-none"
            />
          </label>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-200 text-educa-ink transition hover:border-educa-red hover:text-educa-red xl:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div data-testid="mobile-panel" className="border-t border-stone-200 bg-white px-4 py-4 shadow-[0_20px_40px_rgba(24,21,18,0.08)] xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <label className="flex h-12 items-center gap-3 rounded-2xl border border-stone-200 bg-[#faf7f2] px-4 text-sm text-slate-500">
              <Search className="h-5 w-5 text-stone-400" />
              <input
                type="search"
                aria-label="Buscar"
                placeholder="Buscar..."
                readOnly
                className="w-full border-0 bg-transparent p-0 text-sm font-semibold text-educa-ink placeholder:text-stone-400 focus:outline-none"
              />
            </label>

            <nav aria-label="Menú móvil" className="grid gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-[24px] border px-4 py-3 text-sm font-semibold transition',
                    index === 0
                      ? 'border-red-200 bg-red-50 text-educa-red'
                      : 'border-stone-200 bg-white text-educa-ink hover:border-educa-orange hover:text-educa-red',
                  )}
                  onClick={handleNavSelect}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
