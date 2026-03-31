import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import type { SectionId } from '../../data/landingContent'
import { cn } from '../../lib/cn'

interface SectionShellProps extends PropsWithChildren {
  id?: SectionId
  className?: string
  contentClassName?: string
  surface?: 'white' | 'muted' | 'dark'
}

const surfaceClasses = {
  white: 'bg-white',
  muted: 'bg-slate-50',
  dark: 'bg-casst-navy text-white',
}

export function SectionShell({
  children,
  id,
  className,
  contentClassName,
  surface = 'white',
}: SectionShellProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden py-20 sm:py-24', surfaceClasses[surface], className)}>
      <motion.div
        className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', contentClassName)}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
