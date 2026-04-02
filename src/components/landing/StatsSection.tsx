import type { StatItem } from '../../data/landingContent'

interface StatsSectionProps {
  items: StatItem[]
}

const accentStyles = {
  red: 'text-casst-red',
  orange: 'text-casst-orange',
  green: 'text-casst-green',
  charcoal: 'text-white',
} as const

export function StatsSection({ items }: StatsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-casst-charcoal py-10 text-white">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.label}
              className="relative rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`text-3xl font-extrabold tracking-tight ${accentStyles[item.accent]}`}>
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                    {item.label}
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
