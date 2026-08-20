import { Container } from '@/components/ui/Container'

export function Topbar() {
  return (
    <div className="border-b border-mist/15 bg-galanta-black text-mist">
      <Container className="flex min-h-9 items-center justify-center gap-3 overflow-hidden py-2 text-center font-technical text-[9px] font-medium uppercase tracking-[0.1em] sm:text-[11px] sm:tracking-[0.12em]">
        <span className="hidden shrink-0 whitespace-nowrap sm:inline">Portal profissional</span>
        <span aria-hidden="true" className="hidden size-1 rounded-full bg-cyan sm:block" />
        <span className="whitespace-nowrap">Informações técnicas em desenvolvimento</span>
      </Container>
    </div>
  )
}
