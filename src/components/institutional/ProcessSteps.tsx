import type { ProcessStep } from '@/types/content'

type ProcessStepsProps = { items: readonly ProcessStep[] }

export function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {items.map((step, index) => (
        <li className="border-t border-cyan/45 pt-5" key={step.title}>
          <span className="font-technical text-[11px] font-semibold text-cyan">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-slate">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-steel">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
