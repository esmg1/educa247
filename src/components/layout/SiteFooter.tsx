import { Factory } from 'lucide-react'

import type { ContactDetail, NavLink } from '../../data/landingContent'

interface SiteFooterProps {
  navLinks: NavLink[]
  contactDetails: ContactDetail[]
}

export function SiteFooter({ navLinks, contactDetails }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[#101213] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-educa-red to-educa-orange text-white shadow-edge">
              <Factory className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Educa 24/7
              </div>
              <div className="text-lg font-extrabold tracking-tight text-white">Plataforma industrial</div>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Landing comercial inspirada en la estructura de Insistec, ajustada a la identidad y a los servicios visibles de Educa 24/7.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {contactDetails.map((item) => (
              <span key={item.label} className="rounded-full border border-white/10 px-4 py-2">
                {item.value}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[24px] border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>(c) 2026 Educa 24/7. Certificaciones, capacitaciones, mediciones y asesorías.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#contacto">Contacto</a>
            <a href="#servicios">Servicios</a>
            <a href="#clientes">Clientes</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
