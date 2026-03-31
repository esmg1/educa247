import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'

import type { HeroAudienceView } from '../../data/landingContent'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  audienceViews: HeroAudienceView[]
}

export function HeroSection({ audienceViews }: HeroSectionProps) {
  const [activeAudience, setActiveAudience] = useState<HeroAudienceView>(audienceViews[0])

  return (
    <section id="inicio" className="section-grid relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 pb-16 pt-10 sm:pb-20 sm:pt-16">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-casst-navy/8 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6  lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative"
        >
          <Badge variant="navy" className="mb-6">
            Capacitacion en seguridad industrial
          </Badge>
          <h1 className="text-balance max-w-3xl text-4xl font-extrabold tracking-tight text-casst-ink sm:text-5xl lg:text-6xl">
            Formacion profesional en seguridad industrial para personas, equipos y organizaciones
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-casst-slate">
            Una plataforma disenada para capacitar, evaluar y dar seguimiento al aprendizaje en seguridad, salud e higiene industrial con un enfoque practico, actual y verificable.
          </p>

          <div className="mt-8 inline-flex flex-wrap gap-2 rounded-full border border-slate-200 bg-white/90 p-2 shadow-float">
            {audienceViews.map((view) => (
              <button
                key={view.audience}
                type="button"
                aria-pressed={activeAudience.audience === view.audience}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeAudience.audience === view.audience
                    ? 'bg-casst-navy text-white'
                    : 'text-casst-slate hover:bg-slate-100'
                }`}
                onClick={() => setActiveAudience(view)}
              >
                {view.selectorLabel}
              </button>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-casst-slate">
            {activeAudience.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {activeAudience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-casst-slate shadow-sm"
              >
                <CheckCheck className="h-4 w-4 text-casst-success" />
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#cursos">
              Explorar programas
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={activeAudience.secondaryCta.href} variant="secondary">
              {activeAudience.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 grid gap-3 text-sm font-semibold text-casst-slate sm:grid-cols-2 xl:grid-cols-4">
            {[
              '100% online',
              'Certificados digitales',
              'Seguimiento por modulos',
              'Enfoque practico y corporativo',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-casst-amber" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          
        </motion.div>
      </div>
    </section>
  )
}
