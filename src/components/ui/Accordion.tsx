import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import type { FAQItem } from '../../data/landingContent'
import { cn } from '../../lib/cn'

interface AccordionProps {
  items: FAQItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`

        return (
          <div key={item.question} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,39,66,0.05)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-bold text-casst-ink sm:text-lg">{item.question}</span>
              <span
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-casst-navy transition',
                  isOpen && 'rotate-180 bg-casst-navy text-white',
                )}
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-casst-slate sm:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
