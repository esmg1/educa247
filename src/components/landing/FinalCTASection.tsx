import { ArrowRight, Mail, MessageCircleMore, PhoneCall } from 'lucide-react'

import type { ContactDetail } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface FinalCTASectionProps {
  contactDetails: ContactDetail[]
}

const contactIcons = [Mail, MessageCircleMore, PhoneCall]

export function FinalCTASection({
  contactDetails,
}: FinalCTASectionProps) {
  return (
    <SectionShell id="contacto" surface="dark" className="section-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_30%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <SectionHeading
          eyebrow="Activa la siguiente etapa"
          title="Impulsa una cultura de seguridad con formacion clara, estructurada y medible"
          description="Solicita una demostracion, conoce la oferta formativa o empieza a construir la ruta de capacitacion ideal para tu organizacion."
          theme="dark"
        />

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">
              Solicitar demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#cursos" variant="outline-light">
              Explorar cursos
            </Button>
          </div>
          <div className="mt-6 space-y-3">
            {contactDetails.map((item, index) => {
              const Icon = contactIcons[index]

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-casst-amber hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-casst-amber">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                    <div className="mt-1">{item.value}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
