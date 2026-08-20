# 01 — PRD Galanta Medical / Galanta Ortho

## 1. Resumo

Construir um portal profissional standalone para Galanta Medical, com Galanta Ortho como linha inicial. O MVP deve apresentar a marca e a arquitetura Standard + Personal, organizar um catálogo técnico configurável e converter interesse em solicitações B2B qualificadas.

## 2. Objetivo

Permitir que profissionais, clínicas e hospitais:

1. entendam a proposta da Galanta;
2. conheçam linhas e produtos em desenvolvimento;
3. consultem conteúdo aprovado;
4. selecionem um interesse técnico;
5. enviem uma solicitação profissional;
6. recebam confirmação sem pagamento;
7. sejam acompanhados em um pipeline administrativo mockado.

## 3. Decisões fixas

```txt
Marca: Galanta Medical
Linha inicial: Galanta Ortho
Público: profissional/B2B/B2B2C
Categoria: órteses e imobilizadores 3D
Conversão do MVP: solicitação técnica
Venda aberta: não implementar
Pagamento real: não implementar
Banco/storage real: não implementar nesta fase
Deploy: Docker em servidor próprio
Domínio local: http://localhost:3000
Base44: proibido
```

## 4. Pendências não bloqueantes

Produto/modelo, finalidade, material, tamanhos, lados, protocolos, situação regulatória, preço, imagens e regras comerciais podem permanecer como placeholders seguros conforme `21-MATRIZ-DE-DECISOES-GALANTA.md`.

## 5. Públicos prioritários

- ortopedistas;
- fisioterapeutas;
- terapeutas ocupacionais;
- clínicas;
- hospitais;
- gestores/compradores de pontos de atendimento.

## 6. Escopo do MVP B2B

- home Galanta Medical;
- página Galanta Ortho;
- linhas Standard e Personal;
- catálogo e produto configuráveis;
- páginas por público;
- página “como funciona” sem parâmetros não aprovados;
- solicitação técnica persistida localmente;
- formulário profissional mockado;
- confirmação de solicitação;
- materiais técnicos estruturais;
- página regulatória estrutural;
- FAQ e contato;
- admin mockado de leads;
- SEO e tracking de lead centralizados;
- Docker e documentação operacional.

## 7. Fora do escopo atual

- venda direta;
- Pagar.me real;
- cálculo de preço, desconto, frete ou parcelamento;
- Supabase/Postgres real;
- upload real;
- dados clínicos/pacientes;
- autenticação robusta;
- CRM completo;
- publicação de instruções ou claims não aprovados;
- indexação pública antes do gate de lançamento.

## 8. Jornada principal

```txt
Home/SEO
→ Linha ou conteúdo
→ Categoria/produto
→ Registrar interesse
→ Revisar seleção
→ Dados profissionais
→ Confirmação
→ Qualificação mockada no admin
```

## 9. Home

1. Aviso profissional/topbar sem métricas fictícias.
2. Header Galanta Medical.
3. Hero institucional.
4. Galanta Ortho.
5. Standard + Personal.
6. Fluxo conceitual de adaptação.
7. Públicos atendidos.
8. Engenharia/manufatura digital.
9. Processo de solicitação técnica.
10. Compliance provisório.
11. FAQ.
12. CTA final e footer.

## 10. Conversão

- CTA no primeiro scroll;
- rótulos objetivos;
- formulário progressivo e curto;
- nenhum endereço antes da necessidade de envio;
- CNPJ e volume opcionais inicialmente;
- aviso para não inserir dados de pacientes;
- confirmação clara de que não houve compra/pagamento.

## 11. Produto

A página deve funcionar mesmo com campos pendentes. Ela organiza status, linha, resumo, configuração, finalidade, especificações, documentos, avisos, FAQ e CTA de solicitação. Preço e `Offer` só existirão com comércio real.

## 12. SEO

- metadata por rota;
- canonical via `NEXT_PUBLIC_SITE_URL`;
- Open Graph;
- sitemap e robots;
- Organization e Breadcrumb;
- Product somente com dados aprovados;
- sem Offer ou avaliação fictícia;
- indexação bloqueada até aprovação.

## 13. Tracking

Centralizar PageView, ViewContent, Lead, Contact, FormStart, FormSubmit e eventos de solicitação. Não disparar Purchase ou enviar PII.

## 14. Admin

Login mockado por senha de ambiente, lista de leads, detalhe, seleção técnica, UTMs, consentimentos, histórico e mudança local de status. Sem faturamento demonstrativo.

## 15. Critério de sucesso

O MVP é bem-sucedido quando apresenta a Galanta com coerência, permite uma solicitação profissional completa, preserva pendências como placeholders seguros, não simula venda e passa lint, build, Docker, responsividade, acessibilidade básica e auditoria de compliance.
