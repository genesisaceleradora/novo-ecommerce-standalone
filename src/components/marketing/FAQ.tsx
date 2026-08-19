import type { FAQItem } from '@/data/home'

type FAQProps = { items: readonly FAQItem[] }

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details className="group py-5" key={item.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold text-navy marker:content-none">
            {item.question}<span aria-hidden="true" className="font-sans text-lg font-normal text-gold-dark group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pt-3 text-sm leading-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
