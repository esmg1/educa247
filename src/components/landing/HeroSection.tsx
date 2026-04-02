import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { startTransition, useState } from 'react'

import heroWorker from '../../assets/industrial/hero-worker.jpg'
import machineryFloor from '../../assets/industrial/machinery-floor.jpg'
import type { AccentTone, ServicePillar } from '../../data/landingContent'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  pillars: ServicePillar[]
}

const accentStyles: Record<
  AccentTone,
  {
    tab: string
    chip: string
    border: string
  }
> = {
  red: {
    tab: 'border-red-300/30 bg-red-400/12 text-white hover:border-red-300/70 hover:bg-red-400/18',
    chip: 'bg-red-100 text-educa-red',
    border: 'border-red-300/40',
  },
  orange: {
    tab: 'border-orange-300/30 bg-orange-400/12 text-white hover:border-orange-300/70 hover:bg-orange-400/18',
    chip: 'bg-orange-100 text-educa-orange',
    border: 'border-orange-300/40',
  },
  green: {
    tab: 'border-emerald-300/30 bg-emerald-400/12 text-white hover:border-emerald-300/70 hover:bg-emerald-400/18',
    chip: 'bg-emerald-100 text-educa-green',
    border: 'border-emerald-300/40',
  },
  charcoal: {
    tab: 'border-white/15 bg-white/8 text-white hover:border-white/35 hover:bg-white/12',
    chip: 'bg-stone-100 text-educa-charcoal',
    border: 'border-white/15',
  },
}

export function HeroSection({ pillars }: HeroSectionProps) {
  const [activeId, setActiveId] = useState<ServicePillar['id']>(pillars[0]?.id ?? 'certificaciones')

  if (!pillars.length) {
    return null
  }

  const activePillar = pillars.find((pillar) => pillar.id === activeId) ?? pillars[0]
  const accent = accentStyles[activePillar.accent]

  return (
    <section id="inicio" className="section-grid relative overflow-hidden bg-educa-charcoal text-white">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="hazard-stripes absolute inset-x-0 top-0 h-44 opacity-55" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white/5 to-transparent xl:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Badge variant="red" className="mb-6 border border-white/10 bg-white/10 text-white">
            Educa 24/7 | Oferta industrial HSE
          </Badge>

          <div role="tablist" aria-label="Líneas de servicio" className="mb-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const isActive = pillar.id === activePillar.id

              return (
                <button
                  key={pillar.id}
                  id={`hero-tab-${pillar.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`hero-panel-${pillar.id}`}
                  className={`rounded-[24px] border px-4 py-4 text-left transition ${accentStyles[pillar.accent].tab} ${
                    isActive ? 'shadow-panel ring-1 ring-white/20' : ''
                  }`}
                  onClick={() => {
                    startTransition(() => {
                      setActiveId(pillar.id)
                    })
                  }}
                >
                  <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-300">
                    {pillar.eyebrow}
                  </div>
                  <div className="mt-2 text-base font-bold">{pillar.selectorLabel}</div>
                </button>
              )
            })}
          </div>

          <div
            id={`hero-panel-${activePillar.id}`}
            role="tabpanel"
            aria-labelledby={`hero-tab-${activePillar.id}`}
          >
            <h1 className="text-balance max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {activePillar.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {activePillar.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {activePillar.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur ${accent.border} bg-white/8 text-slate-100`}
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={activePillar.ctaHref}>
                {activePillar.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contacto" variant="outline-light">
                Solicitar contacto
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="metal-frame rounded-[36px] p-3">
            <img
              src={heroWorker}
              alt="Operario con casco naranja inspeccionando maquinaria industrial de gran tamaño"
              className="h-[440px] w-full rounded-[28px] object-cover sm:h-[560px]"
            />

            <div className="absolute left-6 top-6 max-w-xs rounded-[24px] border border-white/10 bg-educa-charcoal/78 px-5 py-4 backdrop-blur">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">
                Ruta activa
              </div>
              <div className="mt-2 text-xl font-extrabold">{activePillar.selectorLabel}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Estructura visual inspirada en la referencia, pero con identidad propia de Educa 24/7.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 max-w-[17rem] rounded-[26px] bg-white/92 px-5 py-5 text-educa-ink shadow-float">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-educa-red">
                <ShieldCheck className="h-4 w-4" />
                Propuesta visible
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <span
                    key={pillar.id}
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
                      pillar.id === activePillar.id ? accent.chip : 'bg-stone-100 text-educa-slate'
                    }`}
                  >
                    {pillar.selectorLabel}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-educa-slate">
                Certificaciones, capacitaciones, mediciones y asesorías ordenadas para lectura comercial inmediata.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
            className="metal-frame absolute -bottom-12 -left-4 hidden w-44 rounded-[28px] p-2 md:block"
          >
            <img
              src={machineryFloor}
              alt="Piso de fábrica con operario y componente metálico suspendido"
              className="h-44 w-full rounded-[20px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
