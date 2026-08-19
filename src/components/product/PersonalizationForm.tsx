'use client'

import { useState } from 'react'
import type { CartCustomization } from '@/components/cart/CartContext'
import type { PersonalizationConfig } from '@/types'
import { trackEvent } from '@/lib/tracking/events'

const maximumFileSizeInBytes = 10 * 1024 * 1024

type PersonalizationFormProps = {
  config: PersonalizationConfig
  value: CartCustomization
  errors?: string[]
  onChange: (value: CartCustomization) => void
}

export function PersonalizationForm({ config, value, errors = [], onChange }: PersonalizationFormProps) {
  const [fileError, setFileError] = useState('')
  if (!config.enabled) return null

  const updateField = (field: keyof CartCustomization, fieldValue: string) => onChange({ ...value, [field]: fieldValue })
  const usesUpload = config.fields.imageUpload || config.fields.multipleImageUpload
  const isRequired = (field: string) => config.requiredFields?.includes(field) ?? false

  function handleFiles(selectedFiles: FileList | null) {
    const files = Array.from(selectedFiles ?? [])
    const validFiles = files.filter((file) => file.type.startsWith('image/') && file.size <= maximumFileSizeInBytes)
    const invalidFiles = files.filter((file) => !file.type.startsWith('image/') || file.size > maximumFileSizeInBytes)
    setFileError(invalidFiles.length > 0 ? 'Alguns arquivos foram ignorados. Escolha imagens JPG, PNG ou WebP de até 10 MB cada.' : '')
    if (validFiles.length > 0) trackEvent('UploadStarted', { file_count: validFiles.length })
    onChange({ ...value, uploadedFiles: validFiles.map((file) => ({ name: file.name })) })
    if (validFiles.length > 0) trackEvent('UploadCompleted', { file_count: validFiles.length })
  }

  return (
    <section aria-labelledby="personalization-title" className="mt-8 rounded-2xl border border-line bg-ivory p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">Personalize seu exemplo</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-navy" id="personalization-title">Conte os detalhes que importam.</h2>
      {config.instructions && <p className="mt-2 text-sm leading-6 text-muted">{config.instructions}</p>}
      <p className="mt-3 text-xs leading-5 text-muted">Campos e arquivos são demonstrativos. Nenhum arquivo é enviado ou armazenado nesta etapa.</p>

      <div className="mt-5 grid gap-4">
        {config.fields.name && <label className="grid gap-2 text-sm font-semibold text-navy">Nome{isRequired('name') && ' *'}<input className="min-h-12 rounded-xl border border-line bg-cream px-4 font-normal text-ink outline-none focus:border-gold-dark" onChange={(event) => updateField('name', event.target.value)} required={isRequired('name')} value={value.name ?? ''} /></label>}
        {config.fields.phrase && <label className="grid gap-2 text-sm font-semibold text-navy">Frase{isRequired('phrase') && ' *'}<input className="min-h-12 rounded-xl border border-line bg-cream px-4 font-normal text-ink outline-none focus:border-gold-dark" onChange={(event) => updateField('phrase', event.target.value)} required={isRequired('phrase')} value={value.phrase ?? ''} /></label>}
        {config.fields.date && <label className="grid gap-2 text-sm font-semibold text-navy">Data{isRequired('date') && ' *'}<input className="min-h-12 rounded-xl border border-line bg-cream px-4 font-normal text-ink outline-none focus:border-gold-dark" onChange={(event) => updateField('date', event.target.value)} required={isRequired('date')} type="date" value={value.date ?? ''} /></label>}
        {config.fields.notes && <label className="grid gap-2 text-sm font-semibold text-navy">Observações{isRequired('notes') && ' *'}<textarea className="min-h-24 rounded-xl border border-line bg-cream p-4 font-normal text-ink outline-none focus:border-gold-dark" maxLength={500} onChange={(event) => updateField('notes', event.target.value)} required={isRequired('notes')} value={value.notes ?? ''} /></label>}
        {config.fields.musicLink && <label className="grid gap-2 text-sm font-semibold text-navy">Link de música{isRequired('musicLink') && ' *'}<input className="min-h-12 rounded-xl border border-line bg-cream px-4 font-normal text-ink outline-none focus:border-gold-dark" onChange={(event) => updateField('musicLink', event.target.value)} placeholder="https://..." required={isRequired('musicLink')} type="url" value={value.musicLink ?? ''} /></label>}
        {usesUpload && <label className="grid gap-2 text-sm font-semibold text-navy">{config.fields.multipleImageUpload ? 'Imagens' : 'Imagem'}{isRequired('uploadedFiles') && ' *'}<input accept="image/jpeg,image/png,image/webp" aria-describedby={fileError ? 'upload-help upload-error' : 'upload-help'} className="block w-full rounded-xl border border-dashed border-gold-dark/50 bg-cream p-3 text-sm font-normal text-muted file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream" multiple={config.fields.multipleImageUpload} onChange={(event) => handleFiles(event.target.files)} required={isRequired('uploadedFiles')} type="file" /><span className="font-normal text-xs leading-5 text-muted" id="upload-help">JPG, PNG ou WebP, até 10 MB por arquivo. Simulação local: arquivos não são enviados.</span>{value.uploadedFiles?.length ? <span className="font-normal text-xs text-gold-dark">{value.uploadedFiles.length} arquivo(s) selecionado(s)</span> : null}</label>}
      </div>
      {fileError && <p aria-live="polite" className="mt-4 text-sm font-semibold text-rose" id="upload-error">{fileError}</p>}
      {errors.length > 0 && <p aria-live="polite" className="mt-4 text-sm font-semibold text-rose">{errors.join(' ')}</p>}
    </section>
  )
}
