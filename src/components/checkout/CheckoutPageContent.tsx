'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useCart } from '@/hooks/useCart'
import { formatPriceInBRL } from '@/lib/formatters'
import { trackEvent } from '@/lib/tracking/events'
import type { CheckoutFormData, MockOrderConfirmation } from '@/types/checkout'

const initialFormData: CheckoutFormData = {
  fullName: '', email: '', phone: '', document: '', zipCode: '', street: '', number: '', complement: '', neighborhood: '', city: '', state: '', orderNotes: '',
}

const requiredFields: Array<keyof CheckoutFormData> = ['fullName', 'email', 'phone', 'document', 'zipCode', 'street', 'number', 'neighborhood', 'city', 'state']

function personalizationSummary(item: ReturnType<typeof useCart>['items'][number]) {
  const customization = item.customization
  if (!customization) return null
  const details = [customization.name && `Nome: ${customization.name}`, customization.phrase && `Frase: ${customization.phrase}`, customization.date && `Data: ${customization.date}`, customization.notes && `Observações: ${customization.notes}`, customization.musicLink && `Música: ${customization.musicLink}`, customization.uploadedFiles?.length && `${customization.uploadedFiles.length} arquivo(s) selecionado(s)`].filter(Boolean)
  return details.length > 0 ? details.join(' · ') : null
}

export function CheckoutPageContent() {
  const { items, isHydrated, subtotal } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isHydrated && items.length > 0) trackEvent('InitiateCheckout', { value: subtotal / 100, currency: 'BRL', num_items: items.length })
  }, [isHydrated, items.length, subtotal])

  function updateField(field: keyof CheckoutFormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const missing = requiredFields.filter((field) => !formData[field].trim())
    if (missing.length > 0) {
      setError('Preencha todos os campos obrigatórios para continuar.')
      return
    }
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/checkout/create', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: { fullName: formData.fullName, email: formData.email, phone: formData.phone, document: formData.document },
          address: { zipCode: formData.zipCode, street: formData.street, number: formData.number, complement: formData.complement, neighborhood: formData.neighborhood, city: formData.city, state: formData.state },
          orderNotes: formData.orderNotes, items,
        }),
      })
      if (!response.ok) throw new Error('mock-order-error')
      const { order } = await response.json() as { order: MockOrderConfirmation }
      window.sessionStorage.setItem('ecommerce-standalone-last-order', JSON.stringify(order))
      router.push('/obrigado')
    } catch {
      setError('Não foi possível simular o pedido. Tente novamente.')
      setIsSubmitting(false)
    }
  }

  if (!isHydrated) return <Container className="py-16"><p className="text-sm text-muted">Carregando seu carrinho…</p></Container>
  if (items.length === 0) return <Container className="py-16 md:py-24"><SectionTitle eyebrow="Checkout" title="Seu carrinho está vazio." description="Escolha um produto demonstrativo antes de seguir para o checkout." /><Link className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-ink" href="/categoria/personalizados">Ver produtos</Link></Container>

  return (
    <Container className="py-10 md:py-16">
      <SectionTitle eyebrow="Checkout demonstrativo" title="Finalize os detalhes do seu pedido." description="Nenhum pagamento será cobrado nesta etapa. A integração Pagar.me será conectada posteriormente." />
      <form className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]" onSubmit={handleSubmit}>
        <div className="space-y-10">
          <fieldset className="grid gap-4"><legend className="font-display text-3xl font-semibold text-navy">Seus dados</legend><CheckoutInput label="Nome completo" onChange={(value) => updateField('fullName', value)} required value={formData.fullName} /><CheckoutInput label="E-mail" onChange={(value) => updateField('email', value)} required type="email" value={formData.email} /><CheckoutInput label="Telefone / WhatsApp" onChange={(value) => updateField('phone', value)} required value={formData.phone} /><CheckoutInput label="CPF / CNPJ" onChange={(value) => updateField('document', value)} required value={formData.document} /></fieldset>
          <fieldset className="grid gap-4"><legend className="font-display text-3xl font-semibold text-navy">Endereço</legend><CheckoutInput label="CEP" onChange={(value) => updateField('zipCode', value)} required value={formData.zipCode} /><CheckoutInput label="Endereço" onChange={(value) => updateField('street', value)} required value={formData.street} /><div className="grid gap-4 sm:grid-cols-2"><CheckoutInput label="Número" onChange={(value) => updateField('number', value)} required value={formData.number} /><CheckoutInput label="Complemento" onChange={(value) => updateField('complement', value)} value={formData.complement} /></div><CheckoutInput label="Bairro" onChange={(value) => updateField('neighborhood', value)} required value={formData.neighborhood} /><div className="grid gap-4 sm:grid-cols-2"><CheckoutInput label="Cidade" onChange={(value) => updateField('city', value)} required value={formData.city} /><CheckoutInput label="Estado" onChange={(value) => updateField('state', value)} required value={formData.state} /></div><label className="grid gap-2 text-sm font-semibold text-navy">Observações do pedido<textarea className="min-h-24 rounded-xl border border-line bg-cream p-4 font-normal text-ink outline-none focus:border-gold-dark" maxLength={500} onChange={(event) => updateField('orderNotes', event.target.value)} value={formData.orderNotes} /></label></fieldset>
          {error && <p aria-live="polite" className="text-sm font-semibold text-rose">{error}</p>}
          <Button className="w-full" disabled={isSubmitting} type="submit">{isSubmitting ? 'Criando pedido…' : 'Finalizar pedido demonstrativo'}</Button>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-ivory p-5 sm:p-6"><h2 className="font-display text-3xl font-semibold text-navy">Resumo do pedido</h2><ul className="mt-5 divide-y divide-line">{items.map((item) => <li className="py-4" key={item.key}><div className="flex justify-between gap-4"><div><p className="font-display text-xl font-semibold text-navy">{item.product.name}</p><p className="mt-1 text-sm text-muted">Quantidade: {item.quantity}</p>{personalizationSummary(item) && <p className="mt-2 text-xs leading-5 text-muted">{personalizationSummary(item)}</p>}</div><strong className="text-sm text-navy">{formatPriceInBRL(item.product.price * item.quantity)}</strong></div></li>)}</ul><div className="mt-5 flex items-center justify-between border-t border-line pt-5"><span className="text-sm text-muted">Subtotal</span><strong className="font-display text-3xl text-navy">{formatPriceInBRL(subtotal)}</strong></div><p className="mt-3 text-xs leading-5 text-muted">Frete, descontos e pagamento serão conectados no fluxo Pagar.me futuro.</p></aside>
      </form>
    </Container>
  )
}

type CheckoutInputProps = { label: string; value: string; onChange: (value: string) => void; required?: boolean; type?: 'email' | 'text' }

function CheckoutInput({ label, value, onChange, required = false, type = 'text' }: CheckoutInputProps) {
  return <label className="grid gap-2 text-sm font-semibold text-navy">{label}{required && ' *'}<input className="min-h-12 rounded-xl border border-line bg-cream px-4 font-normal text-ink outline-none focus:border-gold-dark" onChange={(event) => onChange(event.target.value)} type={type} value={value} /></label>
}
