import { ArrowRight, Mail, MapPin, MessageCircleMore } from 'lucide-react'

import type { ContactDetail } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface FinalCTASectionProps {
  contactDetails: ContactDetail[]
}

const contactIcons = [Mail, MessageCircleMore, MapPin]

export function FinalCTASection({
  contactDetails,
}: FinalCTASectionProps) {
  return (
    <SectionShell id="contacto" surface="dark" className="section-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-casst-red/28 via-transparent to-casst-green/18" />
      <div className="hazard-stripes absolute inset-y-0 right-0 hidden w-1/3 opacity-40 lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
        <SectionHeading
          eyebrow="Contacto"
          title="Una llamada a la accion mas directa, caliente y util para convertir interes en conversacion"
          description="El cierre combina color, botones y datos de contacto en un bloque mas comercial para demos, reuniones y seguimiento de oportunidades."
          theme="dark"
        />

        <div className="rounded-[32px] border border-white/10 bg-white/8 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#servicios">
              Explorar servicios
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#programas" variant="outline-light">
              Ver programas
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            {contactDetails.map((item, index) => {
              const Icon = contactIcons[index]

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-casst-charcoal/36 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-orange-300 hover:text-white"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-1 text-base">{item.value}</div>
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
