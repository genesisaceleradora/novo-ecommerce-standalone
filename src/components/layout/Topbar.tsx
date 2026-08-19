import { topbarBenefits } from '@/data/home'
import { Container } from '@/components/ui/Container'

export function Topbar() {
  return (
    <div className="overflow-hidden bg-ink text-cream">
      <Container className="flex min-h-9 items-center gap-6 overflow-x-auto py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] sm:justify-center sm:text-xs">
        {topbarBenefits.map((benefit) => <span className="shrink-0" key={benefit}>{benefit}</span>)}
      </Container>
    </div>
  )
}
