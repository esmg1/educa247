import type { FAQItem } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Accordion } from '../ui/Accordion'
import { SectionHeading } from '../ui/SectionHeading'

interface FAQSectionProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <SectionShell surface="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Respuestas claras para reducir friccion antes de decidir"
          description="La pagina deja resueltas las preguntas mas frecuentes para personas, equipos y responsables de capacitacion."
        />
        <Accordion items={items} />
      </div>
    </SectionShell>
  )
}
