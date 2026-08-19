import { topbarBenefits } from '@/data/home'

export function Topbar() {
  return (
    <div className="overflow-hidden bg-ink text-cream">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center gap-6 overflow-x-auto px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] sm:justify-center sm:text-xs">
        {topbarBenefits.map((benefit) => (
          <span className="shrink-0" key={benefit}>
            {benefit}
          </span>
        ))}
      </div>
    </div>
  )
}
