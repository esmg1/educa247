import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/cn'

interface SectionShellProps extends PropsWithChildren {
  id?: string
  className?: string
  contentClassName?: string
  surface?: 'white' | 'muted' | 'dark' | 'sand'
}

const surfaceClasses = {
  white: 'bg-white',
  muted: 'bg-casst-sand',
  sand: 'bg-casst-sand',
  dark: 'bg-casst-charcoal text-white',
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
