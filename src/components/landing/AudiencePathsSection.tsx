import type { AudiencePath } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface AudiencePathsSectionProps {
  paths: AudiencePath[]
}

export function AudiencePathsSection({ paths }: AudiencePathsSectionProps) {
  return (
    <SectionShell surface="white">
      <SectionHeading
        eyebrow="Elige tu ruta"
        title="Una plataforma pensada para dos necesidades claras"
        description="Capacitate de forma individual o gestiona el desarrollo de equipos completos desde una sola plataforma."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {paths.map((path) => {
          const Icon = path.icon

          return (
            <article
              key={path.title}
              className="group rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_18px_40px_rgba(15,39,66,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-casst-amber hover:shadow-panel"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-casst-navy/6 text-casst-navy transition group-hover:bg-amber-50 group-hover:text-casst-amber">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-casst-slate">
                  {path.audience}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-casst-ink">{path.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-casst-slate">{path.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {path.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-casst-slate"
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={path.ctaHref} variant={path.audience === 'empresas' ? 'primary' : 'secondary'}>
                  {path.ctaLabel}
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
