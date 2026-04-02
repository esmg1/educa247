import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import heroWorker from '../../assets/industrial/hero-worker.jpg'
import machineryFloor from '../../assets/industrial/machinery-floor.jpg'
import type { HeroFeature } from '../../data/landingContent'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  serviceChips: string[]
  features: HeroFeature[]
}

export function HeroSection({ serviceChips, features }: HeroSectionProps) {
  return (
    <section id="inicio" className="section-grid relative overflow-hidden bg-educa-charcoal text-white">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="hazard-stripes absolute inset-x-0 top-0 h-44 opacity-60" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white/5 to-transparent lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative"
        >
          <Badge variant="red" className="mb-6 border border-white/10 bg-white/10 text-white">
            Educa 24/7 | Seguridad industrial y HSE
          </Badge>

          <h1 className="text-balance max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Formación, certificación y control HSE para operaciones que no pueden improvisar
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            La home ahora comunica una propuesta más industrial: servicios claros, bloques visuales,
            programas técnicos y una capa comercial lista para empresas, coordinadores y equipos
            operativos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#servicios">
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contacto" variant="outline-light">
              Solicitar contacto
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.label}
                  className="rounded-[26px] border border-white/10 bg-white/6 p-4 backdrop-blur"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-100">
                    {feature.label}
                  </p>
                </div>
              )
            })}
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
              className="h-[420px] w-full rounded-[28px] object-cover sm:h-[520px]"
            />

            <div className="absolute left-6 top-6 rounded-[24px] border border-white/10 bg-educa-charcoal/78 px-5 py-4 backdrop-blur">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">
                Frente operativo
              </div>
              <div className="mt-2 text-xl font-extrabold">Capacitación visible en campo</div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                Un lenguaje visual más cercano a planta, supervisión y mantenimiento.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 rounded-[24px] bg-white/92 px-5 py-4 text-educa-ink shadow-float">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-educa-red">
                <ShieldCheck className="h-4 w-4" />
                Evidencia de cumplimiento
              </div>
              <div className="mt-2 text-2xl font-extrabold">4 líneas comerciales</div>
              <p className="mt-1 max-w-[14rem] text-sm leading-6 text-educa-slate">
                Certificaciones, capacitaciones, mediciones y asesorías en una sola lectura.
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
