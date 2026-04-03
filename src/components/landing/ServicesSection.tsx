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
    badge: string
    chip: string
  }
> = {
  red: {
    badge: 'bg-white/92 text-red-700',
    chip: 'border-red-200/70 bg-red-50/92 text-red-700',
  },
  orange: {
    badge: 'bg-white/92 text-orange-700',
    chip: 'border-orange-200/70 bg-orange-50/92 text-orange-700',
  },
  green: {
    badge: 'bg-white/92 text-emerald-700',
    chip: 'border-emerald-200/70 bg-emerald-50/92 text-emerald-700',
  },
  charcoal: {
    badge: 'bg-white/92 text-educa-charcoal',
    chip: 'border-stone-200/70 bg-stone-50/92 text-educa-charcoal',
  },
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <SectionShell id="servicios" surface="sand" className="section-grid">
      <SectionHeading
        eyebrow="Servicios"
        title="Servicios"
        description="Cuatro líneas de servicio para personas y empresas que requieren formación, evaluación y acompañamiento técnico."
        align="center"
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {services.map((service) => {
          const accent = accentStyles[service.accent]

          return (
            <article
              key={service.title}
              className="group relative isolate aspect-[16/11] overflow-hidden rounded-[34px] border border-white/30 bg-educa-charcoal shadow-[0_28px_60px_rgba(24,21,18,0.18)]"
            >
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,21,18,0.92)] via-[rgba(24,21,18,0.35)] to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] ${accent.badge}`}>
                  Educa 24/7
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h2 className="max-w-[18ch] text-[1.55rem] font-extrabold tracking-tight text-white sm:text-[1.85rem]">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-[38ch] text-sm leading-7 text-slate-200">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${accent.chip}`}
                    >
                      {bullet}
                    </span>
                  ))}
                </div>

                <a
                  href={service.ctaHref}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white"
                >
                  {service.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
