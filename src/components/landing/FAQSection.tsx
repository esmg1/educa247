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
          title="Respuestas claras sobre alcance, acceso y acompañamiento"
          description="La sección resuelve dudas habituales sobre servicios, disponibilidad de recursos y canales de contacto."
        />
        <Accordion items={items} />
      </div>
    </SectionShell>
  )
}
