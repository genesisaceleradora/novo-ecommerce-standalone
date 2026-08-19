import type { CartItem } from '@/types/cart'

export function getCustomizationSummary(item: CartItem) {
  const customization = item.customization
  if (!customization) return []
  return [
    customization.name && `Nome: ${customization.name}`,
    customization.phrase && `Frase: ${customization.phrase}`,
    customization.date && `Data: ${customization.date}`,
    customization.dedication && `Dedicatória: ${customization.dedication}`,
    customization.notes && `Observações: ${customization.notes}`,
    customization.musicLink && `Música: ${customization.musicLink}`,
    customization.uploadedFiles?.length && `${customization.uploadedFiles.length} arquivo(s) selecionado(s)`,
  ].filter((detail): detail is string => Boolean(detail))
}
