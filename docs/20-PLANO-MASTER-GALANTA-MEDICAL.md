# 20 — Plano Master Galanta Medical / Galanta Ortho

## 1. Status e finalidade

Este documento organiza a evolução do ecommerce standalone para a Galanta Medical, tendo Galanta Ortho como linha inicial. Ele deve orientar o planejamento conjunto entre equipe Galanta, ChatGPT e Codex.

O plano não valida claims clínicos, situação regulatória, finalidade pretendida ou autorização de uso. Toda informação dessa natureza precisa de aprovação humana técnica/regulatória antes da publicação.

```txt
Status do plano: aprovado como base de desenvolvimento
Fase 0: concluída em 20/08/2026
Fase 1: concluída em 20/08/2026
Marca master: Galanta Medical — nome final
Linha inicial: Galanta Ortho — nome final
Categoria planejada: órteses e imobilizadores 3D
Modelo inicial: portal B2B/B2B2C profissional
Conversão inicial: solicitação técnica, não compra aberta
Pagamento real: adiado até decisão comercial e regulatória
```

## 2. Norte estratégico

A Galanta Medical deve ser apresentada como uma frente de tecnologia, engenharia e manufatura digital aplicada à saúde. A Galanta Ortho deve organizar a oferta inicial de órteses e imobilizadores 3D para profissionais e pontos de atendimento.

Públicos prioritários:

- ortopedistas;
- fisioterapeutas;
- terapeutas ocupacionais;
- clínicas;
- hospitais;
- pontos de atendimento profissional.

Pilares:

- disponibilidade;
- adaptação;
- personalização.

Modelo de produto:

- **Standard:** soluções padronizadas por tamanho, lado e modelo, planejadas para disponibilidade e reposição;
- **Personal:** soluções para casos selecionados, condicionadas a informações e avaliação profissional.

Frase central proposta:

> Pronta quando o paciente precisa. Personalizada quando o caso exige.

Essa e outras mensagens permanecem sujeitas a validação regulatória e comercial.

## 3. Mudança de domínio do produto

O projeto deixa de ser um ecommerce B2C genérico de presentes personalizados e passa a ser um portal clínico-comercial B2B/B2B2C.

Devem ser substituídos progressivamente:

- referência visual e emocional da Eternize;
- paleta azul/dourada e linguagem editorial de presentes;
- Cormorant Garamond;
- categorias de presentes, pets, casais e datas especiais;
- “adicionar ao carrinho”, “comprar” e “finalizar pedido”;
- checkout para consumidor final;
- métricas de faturamento no admin mockado;
- eventos de compra antes de existir pagamento real;
- preço, oferta e claims demonstrativos.

Devem ser preservados e adaptados:

- Next.js, TypeScript, Tailwind e App Router;
- Docker e deploy em servidor próprio;
- componentes reutilizáveis;
- infraestrutura centralizada de SEO e tracking;
- persistência local do fluxo mockado;
- estrutura do admin;
- fundações de banco, storage e Pagar.me;
- organização de rotas e dados mockados.

## 4. Governança entre equipe, ChatGPT e Codex

### Equipe Galanta

Responsável por aprovar:

- nome, marca e ativos visuais;
- produto, catálogo e regras comerciais;
- público e fluxo de atendimento;
- prioridades e critérios de negócio.

### Responsável técnico/regulatório

Responsável por aprovar:

- finalidade pretendida;
- classificação e situação regulatória;
- claims, disclaimers e linguagem permitida;
- programa de amostras;
- instruções, protocolos e documentação técnica.

### ChatGPT

Responsável por apoiar:

- estratégia e posicionamento;
- alternativas de copy;
- FAQs e conteúdo educativo;
- matrizes de conteúdo;
- briefs e revisão conceitual.

Textos gerados pelo ChatGPT não substituem aprovação técnica, jurídica ou regulatória.

### Codex

Responsável por:

- manter `/docs` como fonte de verdade;
- analisar impacto técnico;
- implementar mudanças em branches pequenas;
- rodar lint, build, Docker e testes;
- documentar decisões técnicas;
- criar commits e PRs quando solicitado.

### Ciclo de trabalho

1. ChatGPT desenvolve ou refina o material estratégico.
2. A equipe Galanta aprova as decisões comerciais.
3. O responsável regulatório valida conteúdo de saúde/produto.
4. Codex registra as decisões em `/docs`.
5. Codex implementa um PR delimitado.
6. Codex executa validações técnicas.
7. Equipe e ChatGPT revisam copy, screenshots e experiência.
8. Ajustes são registrados e implementados sem criar fontes paralelas.

## 5. Fase 0 — Congelar decisões essenciais

Status: concluída. As decisões e regras de continuidade estão registradas em [21-MATRIZ-DE-DECISOES-GALANTA.md](./21-MATRIZ-DE-DECISOES-GALANTA.md).

Galanta Medical e Galanta Ortho foram confirmadas como nomes finais. Os detalhes técnicos de produto permanecem pendentes, mas não bloqueiam o desenvolvimento estrutural da plataforma.

Antes da mudança visual, classificar cada item como `confirmado`, `provisório`, `pendente` ou `proibido para publicação`:

- Galanta Medical e Galanta Ortho são nomes finais?
- Qual é o produto inicial exato?
- Qual é sua finalidade pretendida?
- Qual é o status de validação e regularização?
- As peças podem ser chamadas de amostras técnicas?
- O que o profissional pode fazer com uma amostra nesta fase?
- Quais tamanhos, lados, materiais e processos estão confirmados?
- Existe preço, tabela B2B ou proposta individual?
- Haverá envio físico na primeira fase?
- Quem recebe e qualifica os leads?
- Qual é o prazo de retorno comercial?
- Quais dados podem ser coletados?
- Quais logos, renders, fotografias e documentos podem ser publicados?

### Gate de saída

Matriz de decisões aprovada pela equipe e, onde necessário, pelo responsável regulatório.

## 6. Fase 1 — Normalizar a fonte de verdade

Status: concluída. Os documentos 16–19 foram criados e a documentação legada foi normalizada para o domínio Galanta Medical/Galanta Ortho.

Branch recomendada:

```txt
docs/galanta-medical-foundation
```

Criar:

- `docs/16-GALANTA-MEDICAL-BRAND-GUIDE.md`;
- `docs/17-GALANTA-ORTHO-COMPLIANCE-COPY.md`;
- `docs/18-GALANTA-ORTHO-PRODUCT-TAXONOMY.md`;
- `docs/19-GALANTA-ORTHO-B2B-FLOW.md`.

Revisar para eliminar conflitos:

- `AGENTS.md`;
- `docs/00-CONTEXTO-DO-PROJETO.md`;
- `docs/01-PRD.md`;
- `docs/02-DESIGN-SYSTEM.md`;
- `docs/03-ARQUITETURA.md`;
- `docs/04-ROTAS.md`;
- `docs/05-PRODUTOS-E-CATEGORIAS.md`;
- `docs/06-CHECKOUT-PAGARME.md`;
- `docs/07-PERSONALIZACAO-E-UPLOADS.md`;
- `docs/08-TRACKING-E-SEO.md`;
- `docs/09-BANCO-DE-DADOS.md`;
- `docs/10-ADMIN.md`;
- `docs/11-COPY-E-CONTEUDO.md`;
- `docs/12-CODEX-TASKS.md`;
- `docs/13-CRITERIOS-DE-ACEITE.md`;
- `docs/14-PENDENCIAS.md`;
- `README.md`.

### Gate de saída

Nenhum documento deve continuar orientando futuros agentes a construir um ecommerce B2C de presentes.

## 7. Fase 2 — Design system Galanta Medical

Status: concluída em 20/08/2026. A fundação visual Clinical Tech Industrial, os componentes técnicos e o shell global Galanta foram aplicados sem migrar o domínio legado de catálogo e fluxo.

Branch recomendada:

```txt
feat/galanta-medical-design-system
```

Entregas:

- conceito Clinical Tech Industrial;
- paleta Galanta Medical;
- Sora para títulos;
- Inter para interface;
- IBM Plex Mono para labels e dados técnicos;
- botões de solicitação técnica;
- badges Standard, Personal, Amostra Técnica, tamanho e lado;
- cards e tabelas técnicas;
- estados de aviso e compliance;
- header, footer e topbar profissionais;
- remoção de métricas não comprovadas.

### Gate de saída

- contraste e foco acessíveis;
- funcionamento mobile first;
- nenhuma linguagem de presente;
- nenhum claim clínico não aprovado;
- fluxos existentes ainda funcionais.

## 8. Fase 3 — Home e estrutura institucional

Branch recomendada:

```txt
feat/galanta-medical-site-foundation
```

Entregas:

- nova home;
- navegação profissional;
- hero clínico-industrial;
- Standard + Personal;
- fluxo selecionar, aquecer, moldar e ajustar;
- públicos atendidos;
- processo de avaliação técnica;
- CTA para apresentação/amostras;
- avisos provisórios aprovados;
- footer institucional.

Rotas planejadas:

```txt
/galanta-ortho
/produtos
/linha-standard
/linha-personal
/como-funciona
/amostras-tecnicas
/profissionais
/clinicas-e-hospitais
/materiais-tecnicos
/regulatorio-e-seguranca
```

### Gate de saída

Home e navegação refletem o novo posicionamento sem depender do catálogo B2C.

## 9. Fase 4 — Catálogo Galanta Ortho

Branch recomendada:

```txt
feat/galanta-ortho-catalog
```

O domínio de produto deve suportar:

- linha Standard ou Personal;
- status comercial/regulatório;
- finalidade pretendida aprovada;
- público profissional;
- tamanhos e lados;
- material;
- adaptação térmica;
- protocolo e cuidados;
- limpeza e armazenamento;
- rastreabilidade futura;
- documentos técnicos;
- avisos regulatórios;
- tipos de solicitação;
- preço opcional.

Categorias planejadas:

- Linha Standard;
- Linha Personal;
- Amostras Técnicas;
- Materiais Técnicos;
- Acessórios e reposição como categoria futura.

### Gate de saída

- sem preço inventado;
- sem venda direta a paciente;
- sem `Offer` no JSON-LD sem oferta comercial real;
- variações de tamanho/lado funcionais;
- avisos visíveis na página do produto.

## 10. Fase 5 — Solicitação técnica B2B

Branch recomendada:

```txt
feat/galanta-b2b-technical-request
```

Rotas recomendadas:

```txt
/solicitacao
/solicitacao/dados
/solicitacao/confirmacao
```

Redirecionamentos temporários a avaliar:

```txt
/carrinho → /solicitacao
/checkout → /solicitacao/dados
/obrigado → /solicitacao/confirmacao
```

Tipos de interesse:

- apresentação técnica;
- amostra técnica;
- planejamento de estoque;
- projeto personalizado;
- contato comercial.

Campos iniciais recomendados:

- nome;
- profissão;
- registro profissional, quando aplicável;
- clínica, hospital ou empresa;
- cidade e estado;
- WhatsApp;
- e-mail;
- perfil de atendimento;
- interesse;
- volume aproximado opcional;
- CNPJ opcional na qualificação inicial;
- observações comerciais/técnicas;
- consentimento de privacidade.

Não coletar endereço completo antes de existir necessidade de envio. Não solicitar nem aceitar dados identificáveis de pacientes no MVP.

Aviso recomendado no formulário:

> Não inclua nomes, documentos, fotografias ou informações identificáveis de pacientes.

### Gate de saída

Solicitação pode ser iniciada, revisada, enviada e confirmada sem linguagem de compra ou pagamento.

## 11. Fase 6 — Admin como pipeline de leads

Branch recomendada:

```txt
feat/galanta-admin-lead-pipeline
```

Indicadores:

- leads técnicos totais;
- aguardando qualificação;
- apresentações agendadas;
- amostras em avaliação;
- propostas em aberto.

Status:

```txt
Novo lead técnico
Aguardando qualificação
Apresentação agendada
Amostras selecionadas
Amostras enviadas
Em avaliação profissional
Proposta enviada
Estoque em planejamento
Parceria aprovada
Perdido
```

O detalhe deve exibir profissional, registro, instituição, contato, interesse, produtos, volume, UTMs, histórico, consentimento e observações internas.

### Gate de saída

Admin mockado acompanha leads sem exibir faturamento ou pagamento fictício.

## 12. Fase 7 — Autoridade, compliance e materiais

Branch recomendada:

```txt
feat/galanta-ortho-authority-content
```

Entregas:

- páginas institucionais completas;
- FAQs por público;
- página regulatória;
- hub de materiais técnicos;
- estrutura para fichas e protocolos aprovados;
- conteúdo sobre órteses 3D e manufatura digital;
- disclaimers contextuais;
- CTAs conectados ao fluxo B2B.

Materiais publicados devem possuir versão, data, responsável, status de aprovação e produto aplicável.

### Gate de saída

Todo conteúdo técnico publicado possui aprovação e rastreabilidade editorial.

## 13. Fase 8 — SEO e tracking B2B

Branch recomendada:

```txt
feat/galanta-b2b-seo-tracking
```

SEO:

- metadata por página;
- canonical;
- sitemap;
- breadcrumb;
- Organization;
- Product somente com dados aprovados;
- Offer somente com preço e venda reais;
- robots bloqueado até aprovação de lançamento;
- conteúdo voltado à autoridade profissional.

Eventos recomendados:

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
ProfessionalMaterialDownloaded
```

Desativar até existir venda real:

```txt
InitiateCheckout
Purchase
Receita e valor de pedido
```

### Gate de saída

Funnel de lead mensurável, sem registrar informações pessoais ou clínicas nos eventos.

## 14. Fase 9 — Aceite do MVP B2B

Branch recomendada:

```txt
chore/galanta-b2b-mvp-readiness
```

Checklist:

- remover referências a Eternize e presentes;
- revisar CTAs;
- testar desktop e mobile;
- testar teclado, foco, labels e contraste;
- testar solicitação completa;
- testar persistência do resumo;
- testar admin mockado;
- validar sitemap e robots;
- validar ausência de claims clínicos não aprovados;
- validar ausência de preço/oferta fictícia;
- validar ausência de dados reais e secrets;
- revisar textos com responsável regulatório;
- rodar lint, build e Docker;
- validar links e estados vazios.

## 15. Fase 10 — Operação real

Somente após o MVP B2B aprovado:

1. Supabase/Postgres.
2. Autenticação administrativa real.
3. Persistência de leads e histórico.
4. Consentimento e política de retenção.
5. Storage privado, se necessário.
6. Notificações comerciais.
7. Integração com CRM.
8. Auditoria e rate limiting.
9. Monitoramento e backups.
10. Rastreabilidade de amostras e produtos.

Pagar.me depende de decisão explícita sobre venda direta, público comprador, preço, modalidade B2B, faturamento e situação regulatória.

## 16. Sequência de PRs

| Ordem | PR | Dependência |
| --- | --- | --- |
| 1 | Documentação e decisões Galanta | Fase 0 aprovada |
| 2 | Design system | PR 1 |
| 3 | Home, navegação e estrutura institucional | PR 2 |
| 4 | Catálogo e modelo de produto | PR 3 |
| 5 | Solicitação técnica B2B | PR 4 |
| 6 | Admin de leads | PR 5 |
| 7 | Conteúdo técnico e autoridade | PRs 3–5 |
| 8 | SEO e tracking B2B | PRs 4 e 7 |
| 9 | Polish, aceite e Docker | Todos anteriores |
| 10+ | Banco, CRM, storage e pagamentos | MVP aprovado |

## 17. Riscos principais

- publicar claims antes de validação;
- tratar amostra como autorização de uso clínico;
- capturar dados de pacientes;
- manter documentos antigos contraditórios;
- reaproveitar pedido/checkout sem mudar o domínio;
- indexar páginas conceituais como produtos regularizados;
- usar schema de preço sem comercialização real;
- criar formulário B2B longo demais;
- implementar Pagar.me prematuramente;
- aplicar identidade sem ativos aprovados;
- transformar o admin mockado em CRM complexo cedo demais.

## 18. Definição global de pronto

Cada etapa só está pronta quando:

- a documentação relevante não contém conflitos;
- lint e build passam;
- Docker funciona quando a mudança afetar runtime;
- mobile e desktop foram verificados;
- acessibilidade básica foi revisada;
- não há secrets ou dados reais;
- não há claims ou materiais sem aprovação;
- o PR é pequeno, revisável e possui critérios de aceite;
- pendências futuras estão documentadas.

## 19. Próxima ação

Versionar o design system e iniciar a Fase 3 em PR separado: implementar a home e a estrutura institucional Galanta Medical sem migrar o catálogo ou o fluxo B2B no mesmo PR.
