import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import type { HeroBanner } from '../../data/landingContent'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface HeroSectionProps {
  banner: HeroBanner
}

export function HeroSection({ banner }: HeroSectionProps) {
  return (
    <section id="inicio" className="section-grid relative overflow-hidden bg-[#140f0d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(226,72,47,0.32),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,138,0,0.2),transparent_28%),linear-gradient(180deg,rgba(20,15,13,0.9),rgba(20,15,13,1))]" />
      <div className="hazard-stripes absolute inset-x-0 top-0 h-44 opacity-35" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <Badge variant="red" className="mb-6 border border-white/10 bg-white/10 text-white">
            {banner.eyebrow}
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {banner.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{banner.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {banner.quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-orange-300 hover:bg-white/12 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={banner.primaryCtaHref}>
              {banner.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={banner.secondaryCtaHref} variant="outline-light">
              {banner.secondaryCtaLabel}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="metal-frame rounded-[36px] p-3">
            <img
              src={banner.primaryImageSrc}
              alt={banner.primaryImageAlt}
              className="h-[360px] w-full rounded-[28px] object-cover sm:h-[520px]"
            />
          </div>

          <div className="grid gap-4">
            <div className="metal-frame rounded-[32px] p-3">
              <img
                src={banner.secondaryImageSrc}
                alt={banner.secondaryImageAlt}
                className="h-[250px] w-full rounded-[24px] object-cover sm:h-[320px]"
              />
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-200">
                Enfoque visual
              </div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                Menos texto, más lectura rápida.
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Menú directo, accesos rápidos y grandes fotos para mostrar el valor de cada línea.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
