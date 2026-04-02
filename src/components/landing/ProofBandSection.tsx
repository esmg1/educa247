import type { ProofItem } from '../../data/landingContent'

interface ProofBandSectionProps {
  items: ProofItem[]
}

export function ProofBandSection({ items }: ProofBandSectionProps) {
  return (
    <section className="relative overflow-hidden bg-educa-charcoal py-10 text-white">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="relative rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
