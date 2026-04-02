import { ArrowRight } from 'lucide-react'

import type { AccentTone, ServiceOverviewCard } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface ServicesSectionProps {
  services: ServiceOverviewCard[]
}

const accentStyles: Record<
  AccentTone,
  {
    bar: string
    icon: string
    label: string
  }
> = {
  red: {
    bar: 'from-educa-red via-educa-orange to-transparent',
    icon: 'bg-red-100 text-educa-red',
    label: 'text-educa-red',
  },
  orange: {
    bar: 'from-educa-orange via-orange-300 to-transparent',
    icon: 'bg-orange-100 text-educa-orange',
    label: 'text-educa-orange',
  },
  green: {
    bar: 'from-educa-green via-emerald-300 to-transparent',
    icon: 'bg-emerald-100 text-educa-green',
    label: 'text-educa-green',
  },
  charcoal: {
    bar: 'from-educa-charcoal via-educa-blue to-transparent',
    icon: 'bg-stone-200 text-educa-charcoal',
    label: 'text-educa-charcoal',
  },
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionShell id="servicios" surface="sand" className="section-grid">
      <SectionHeading
        eyebrow="¿Qué es lo que hacemos?"
        title="¿Qué es lo que hacemos?"
        description="La home ahora presenta las cuatro líneas comerciales principales con lenguaje directo, color y saltos claros hacia cada catálogo."
        align="center"
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon
          const accent = accentStyles[service.accent]

          return (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-[32px] border border-educa-mist bg-white p-6 shadow-float"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent.bar}`} />

              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className={`text-xs font-extrabold uppercase tracking-[0.24em] ${accent.label}`}>
                  Educa 24/7
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-educa-ink">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-educa-slate">{service.description}</p>

              <div className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl bg-educa-cloud px-4 py-3 text-sm font-semibold text-educa-ink"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${accent.icon}`} />
                    {bullet}
                  </div>
                ))}
              </div>

              <a
                href={service.ctaHref}
                className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] ${accent.label}`}
              >
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
