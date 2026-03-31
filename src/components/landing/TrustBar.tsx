import type { TrustItem } from '../../data/landingContent'

interface TrustBarProps {
  items: TrustItem[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-y border-slate-200 bg-[#eaf0f7]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className={`flex items-center gap-3 ${
                index < items.length - 1 ? 'lg:border-r lg:border-slate-300/60 lg:pr-4' : ''
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-casst-amber shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold leading-6 text-casst-ink">{item.title}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
