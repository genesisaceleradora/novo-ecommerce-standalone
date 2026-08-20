# 13 — Critérios de Aceite Galanta

## 1. Geral

- marca/linha corretas;
- nenhum conteúdo B2C de presentes;
- nenhum dado sensível hardcoded;
- nenhum claim ou especificação inventado;
- pendências identificadas;
- mobile e desktop funcionais;
- acessibilidade básica;
- lint/build passam;
- Docker passa quando aplicável.

## 2. Home e institucional

- posicionamento profissional claro;
- Standard + Personal apresentados sem claim;
- público profissional explícito;
- CTA de solicitação;
- aviso de desenvolvimento;
- nenhuma métrica fictícia.

## 3. Catálogo/produto

- rotas funcionam e tratam inexistente;
- status e placeholders claros;
- configuração só quando disponível;
- sem preço, parcelamento, avaliação ou estoque fictício;
- documentos exibem versão/status;
- aviso regulatório visível;
- sem Offer quando não há comércio.

## 4. Solicitação

- adicionar/remover/revisar item;
- tipo e configuração preservados;
- persistência usa nova chave/versionamento;
- dados profissionais validados;
- consentimento explícito;
- aviso de dados de paciente;
- confirmação informa que não houve compra/pagamento;
- nenhuma integração externa obrigatória.

## 5. Admin

- login mockado seguro;
- dashboard sem faturamento;
- lista/detalhe de leads;
- status B2B;
- dados fictícios;
- mudança local claramente indicada;
- produção sem senha não autentica.

## 6. Tracking

- scripts não duplicados;
- eventos centralizados/tipados;
- eventos não falham sem IDs;
- zero PII;
- Lead/FormSubmit sem duplicidade;
- Purchase/InitiateCheckout inativos.

## 7. SEO

- metadata Galanta;
- canonical correto;
- sitemap/robots acessíveis;
- páginas privadas fora do sitemap;
- indexação bloqueada até gate;
- Organization/Breadcrumb coerentes;
- Product apenas com dados aprovados;
- Offer/ratings ausentes sem dados reais.

## 8. Compliance e privacidade

- checklist editorial aplicado;
- nenhum uso clínico liberado implicitamente;
- nenhum protocolo/benefício pendente publicado como real;
- nenhum dado de paciente solicitado;
- sem upload real;
- placeholders não parecem evidência.

## 9. Rotas mínimas alvo

```txt
/
/galanta-ortho
/produtos
/produto/[slug]
/linha-standard
/linha-personal
/como-funciona
/amostras-tecnicas
/profissionais
/clinicas-e-hospitais
/materiais-tecnicos
/regulatorio-e-seguranca
/solicitacao
/solicitacao/dados
/solicitacao/confirmacao
/faq
/contato
/admin
/robots.txt
/sitemap.xml
```

Cada PR valida apenas as rotas já implementadas; o aceite global exige o conjunto completo.
