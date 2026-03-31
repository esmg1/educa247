import { Building2, Mail, MessageCircleMore, ShieldCheck } from 'lucide-react'

import type { ContactDetail, FooterGroup } from '../../data/landingContent'

interface SiteFooterProps {
  groups: FooterGroup[]
  contactDetails: ContactDetail[]
}

const socialLinks = [
  { label: 'Email', href: 'mailto:contacto@casst.placeholder', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/593000000000', icon: MessageCircleMore },
  { label: 'Institucional', href: '#contacto', icon: Building2 },
  { label: 'Certificacion', href: '#contacto', icon: ShieldCheck },
]

export function SiteFooter({ contactDetails, groups }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0b1c31] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))] lg:px-8">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            CASST
          </div>
          <h2 className="max-w-sm text-2xl font-extrabold tracking-tight text-white">
            Formacion clara para construir una cultura de seguridad medible.
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            {contactDetails.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-3 transition hover:text-white">
                <span className="h-2 w-2 rounded-full bg-casst-amber" />
                <span>{item.value}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, ...link }) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-casst-amber hover:text-casst-amber"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              {group.title}
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              {group.links.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>(c) 2026 CASST. Plataforma de seguridad industrial.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#contacto">Privacidad</a>
            <a href="#contacto">Terminos</a>
            <a href="#contacto">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
