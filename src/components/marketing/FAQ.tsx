import type { FAQItem } from '@/data/home'

type FAQProps = { items: readonly FAQItem[] }

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-mist border-y border-mist">
      {items.map((item, index) => (
        <details className="group py-5" key={item.question}>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold tracking-[-0.02em] text-slate marker:content-none sm:text-xl">
            <span className="flex items-baseline gap-3"><span aria-hidden="true" className="font-technical text-[10px] text-cyan">{String(index + 1).padStart(2, '0')}</span>{item.question}</span>
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-mist font-sans text-base font-normal text-cyan transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pt-3 pl-8 text-sm leading-6 text-steel">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
