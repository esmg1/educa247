import type { WorkflowStep } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface HowItWorksSectionProps {
  steps: WorkflowStep[]
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <SectionShell id="metodologia" surface="muted">
      <SectionHeading
        eyebrow="Asi funciona"
        title="Una ruta simple para activar formacion, evaluacion y certificacion"
        description="El recorrido esta disenado para reducir friccion, mantener visibilidad y facilitar la toma de decisiones."
        align="center"
      />

      <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-300 lg:block" />
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_28px_rgba(15,39,66,0.05)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-casst-navy text-xl font-extrabold text-white">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-casst-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-casst-slate">{step.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
