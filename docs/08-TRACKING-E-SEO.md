# 08 — Tracking e SEO B2B

## 1. Objetivo

Mensurar descoberta, interesse e envio de solicitações profissionais, construindo autoridade sem duplicidade de scripts, PII ou sinais falsos de ecommerce.

## 2. Tracking centralizado

Manter providers e adaptadores em `/src/lib/tracking` e um único ponto de carregamento. Componentes chamam funções tipadas; não inserem pixels manualmente.

## 3. Eventos do MVP

```txt
PageView
ViewContent
Lead
Contact
FormStart
FormSubmit
TechnicalPresentationRequested
TechnicalSampleRequested
StockPlanningRequested
PersonalProjectRequested
ProfessionalMaterialDownloaded
```

`Search` pode entrar quando busca real existir.

## 4. Eventos inativos

```txt
AddToCart
InitiateCheckout
Purchase
```

O código legado pode permanecer temporariamente, mas não deve disparar no novo fluxo. `Purchase` só retorna com pagamento real confirmado.

## 5. Payload permitido

- IDs internos não sensíveis;
- slug/status da página;
- linha/categoria;
- tipo de solicitação;
- quantidade de itens;
- UTMs.

Proibido:

- nome, e-mail, telefone, documento ou registro;
- instituição identificável quando desnecessária;
- observações;
- informação clínica;
- nome/arquivo de paciente.

## 6. UTMs

Persistir separadamente:

```txt
utm_source
utm_medium
utm_campaign
utm_content
utm_term
fbclid
gclid
```

Aplicar expiração e não misturar com payload público/logs.

## 7. SEO técnico

- title e description únicos;
- canonical via `NEXT_PUBLIC_SITE_URL`;
- Open Graph;
- sitemap;
- robots;
- alt text factual;
- URLs em português;
- performance mobile;
- noindex em admin, APIs, formulário e confirmação quando aplicável.

## 8. JSON-LD

Permitidos:

- Organization;
- BreadcrumbList;
- Product somente quando os dados representarem produto real e aprovado.

Condicionados:

- Offer exige preço/oferta reais;
- AggregateRating exige avaliações reais;
- MedicalDevice ou tipos relacionados exigem revisão de adequação antes do uso.

## 9. Conteúdo de autoridade

Páginas planejadas:

```txt
/galanta-ortho
/linha-standard
/linha-personal
/como-funciona
/profissionais
/clinicas-e-hospitais
/materiais-tecnicos
/regulatorio-e-seguranca
```

Keywords não autorizam claims. Conteúdo deve passar por `17-GALANTA-ORTHO-COMPLIANCE-COPY.md`.

## 10. Robots e lançamento

Enquanto domínio, conteúdo, catálogo, páginas legais e compliance não estiverem aprovados, bloquear indexação. A liberação é um gate explícito, não consequência automática de configurar domínio.

## 11. Aceite

- scripts carregam uma vez;
- eventos não falham sem IDs;
- eventos de lead disparam uma vez;
- zero PII no payload;
- UTMs são preservadas;
- sitemap contém somente páginas aprovadas;
- Offer/Purchase permanecem ausentes;
- metadata usa Galanta Medical e status real do conteúdo.
