import type { Key, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type TechnicalTableColumn = {
  key: string
  label: string
  width?: string
}

export type TechnicalTableRow = Record<string, ReactNode>

type TechnicalTableProps = {
  caption: string
  className?: string
  columns: readonly TechnicalTableColumn[]
  rowHeaderKey?: string
  rowKey?: (row: TechnicalTableRow, index: number) => Key
  rows: readonly TechnicalTableRow[]
}

export function TechnicalTable({ caption, className, columns, rowHeaderKey, rowKey, rows }: TechnicalTableProps) {
  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-mist bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan', className)} role="region" tabIndex={0}>
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-graphite text-sterile">
          <tr>
            {columns.map((column) => <th className="border-b border-mist/20 px-4 py-3 font-technical text-[11px] font-semibold uppercase tracking-[0.1em]" key={column.key} scope="col" style={{ width: column.width }}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-mist">
          {rows.map((row, rowIndex) => (
            <tr className="align-top odd:bg-sterile/70" key={rowKey?.(row, rowIndex) ?? rowIndex}>
              {columns.map((column) => {
                const Cell = column.key === rowHeaderKey ? 'th' : 'td'
                return <Cell className={cn('px-4 py-3 leading-6 text-steel', column.key === rowHeaderKey && 'font-semibold text-slate')} key={column.key} scope={column.key === rowHeaderKey ? 'row' : undefined}>{row[column.key] ?? 'A confirmar'}</Cell>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
