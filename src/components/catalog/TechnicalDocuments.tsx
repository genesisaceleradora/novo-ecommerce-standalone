import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { TechnicalDocument } from '@/types/catalog'

const kindLabels: Record<TechnicalDocument['kind'], string> = {
  datasheet: 'Ficha técnica',
  protocol: 'Protocolo',
  safety: 'Segurança',
  regulatory: 'Regulatório',
  guide: 'Guia',
}

export function TechnicalDocuments({ documents }: { documents: readonly TechnicalDocument[] }) {
  return <div className="grid gap-4 md:grid-cols-2">{documents.map((document) => {
    const isPublic = document.status === 'approved' && Boolean(document.publicUrl)
    return <Card className="flex items-start justify-between gap-5 p-5" key={document.id} variant="technical"><div><p className="font-technical text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan">{kindLabels[document.kind]}</p><h3 className="mt-2 text-sm font-semibold text-slate">{document.title}</h3><p className="mt-2 text-xs text-steel">Versão: {document.version}</p></div><Badge variant={isPublic ? 'success' : 'pending'}>{isPublic ? 'Disponível' : 'Não publicado'}</Badge></Card>
  })}</div>
}
