import { ArrowRight } from 'lucide-react'

import type { ServiceCard } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface ServicesSectionProps {
  services: ServiceCard[]
}

const accentStyles = {
  red: {
    bar: 'from-casst-red via-casst-orange to-transparent',
    icon: 'bg-red-100 text-casst-red',
    label: 'text-casst-red',
  },
  orange: {
    bar: 'from-casst-orange via-orange-300 to-transparent',
    icon: 'bg-orange-100 text-casst-orange',
    label: 'text-casst-orange',
  },
  green: {
    bar: 'from-casst-green via-emerald-300 to-transparent',
    icon: 'bg-emerald-100 text-casst-green',
    label: 'text-casst-green',
  },
  charcoal: {
    bar: 'from-casst-charcoal via-casst-blue to-transparent',
    icon: 'bg-stone-200 text-casst-charcoal',
    label: 'text-casst-charcoal',
  },
} as const

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionShell id="servicios" surface="sand" className="section-grid">
      <SectionHeading
        eyebrow="Servicios principales"
        title="Cuatro lineas para comunicar una oferta industrial mas robusta y visual"
        description="Cada bloque presenta un frente comercial distinto, con color, iconografia y bullets que hacen mas facil entender que resuelve CASST."
        align="center"
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          const accent = accentStyles[service.accent]

          return (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-[32px] border border-casst-mist bg-white p-6 shadow-float"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent.bar}`} />

              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className={`text-xs font-extrabold uppercase tracking-[0.24em] ${accent.label}`}>
                  Servicio {index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-casst-ink">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-casst-slate">{service.description}</p>

              <div className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl bg-casst-cloud px-4 py-3 text-sm font-semibold text-casst-ink"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${accent.icon}`} />
                    {bullet}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] ${accent.label}`}
              >
                Conversar sobre este servicio
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
