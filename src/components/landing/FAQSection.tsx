import type { FAQItem } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Accordion } from '../ui/Accordion'
import { SectionHeading } from '../ui/SectionHeading'

interface FAQSectionProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <SectionShell surface="sand" className="section-grid">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Respuestas cortas para que la página siga vendiendo sin perder claridad"
          description="El cierre conserva una FAQ directa, con lenguaje comercial y técnico suficiente para reducir dudas antes del contacto."
        />
        <Accordion items={items} />
      </div>
    </SectionShell>
  )
}
