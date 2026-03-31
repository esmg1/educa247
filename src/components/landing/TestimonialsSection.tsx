import { Quote, Star } from 'lucide-react'

import type { TestimonialPlaceholder } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'

interface TestimonialsSectionProps {
  testimonials: TestimonialPlaceholder[]
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <SectionShell surface="white">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Prueba institucional"
          title="Diseno listo para activar testimonios, logos y evidencia de adopcion"
          description="La seccion queda preparada para incorporar credenciales validadas sin recurrir a cifras o citas inventadas."
        />

        <div className="grid gap-3 rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-casst-slate sm:grid-cols-2">
          {[
            'Rutas formativas: --',
            'Horas de contenido: --',
            'Evaluaciones por modulo: disponible',
            'Certificacion digital: activa',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white bg-white px-4 py-3 font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={`${testimonial.name}-${testimonial.role}`}
            className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_16px_34px_rgba(15,39,66,0.05)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-casst-amber">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <Quote className="h-5 w-5 text-casst-blue" />
            </div>
            <p className="text-base leading-7 text-casst-slate">{testimonial.quote}</p>
            <div className="mt-8">
              <div className="font-bold text-casst-ink">{testimonial.name}</div>
              <div className="mt-1 text-sm text-casst-slate">
                {testimonial.role} / {testimonial.company}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[30px] border border-dashed border-slate-300 bg-slate-50 p-6">
        <div className="mb-3 flex items-center gap-3">
          <Badge variant="navy">Espacio para logos</Badge>
          <span className="text-sm font-semibold text-casst-slate">
            Instituciones aliadas y empresas clientes
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {['Logo 1', 'Logo 2', 'Logo 3'].map((logo) => (
            <div
              key={logo}
              className="flex h-20 items-center justify-center rounded-[24px] border border-slate-200 bg-white text-sm font-bold uppercase tracking-[0.18em] text-slate-400"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
