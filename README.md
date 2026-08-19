# Novo Ecommerce Standalone — Blueprint para Codex

Este repositório começa como uma pasta de documentação para o Codex criar um ecommerce do zero, sem Base44.

## Regras fixas do projeto

- **Nome do projeto:** a definir.
- **Produto principal:** a definir.
- **Domínio local:** `http://localhost:3000`.
- **Gateway de pagamento:** Pagar.me.
- **Base44:** não usar.
- **Referência estratégica provisória:** ecommerce Eternize standalone.
- **Objetivo:** criar uma base de ecommerce premium, mobile first, escalável, preparada para SEO, tráfego pago, tracking, checkout, carrinho, personalização e painel administrativo.

## Como usar com o Codex

1. Abra esta pasta/repositório no Codex.
2. Leia primeiro `AGENTS.md` e `docs/00-CONTEXTO-DO-PROJETO.md`.
3. Peça para o Codex executar as tasks na ordem descrita em `docs/12-CODEX-TASKS.md`.
4. O Codex deve abrir PRs pequenos e independentes.
5. Nunca implementar funcionalidades fora do escopo sem atualizar os docs.

## Estrutura da pasta

```txt
.
├── AGENTS.md
├── README.md
├── .env.example
├── .gitignore
├── docs/
│   ├── 00-CONTEXTO-DO-PROJETO.md
│   ├── 01-PRD.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-ARQUITETURA.md
│   ├── 04-ROTAS.md
│   ├── 05-PRODUTOS-E-CATEGORIAS.md
│   ├── 06-CHECKOUT-PAGARME.md
│   ├── 07-PERSONALIZACAO-E-UPLOADS.md
│   ├── 08-TRACKING-E-SEO.md
│   ├── 09-BANCO-DE-DADOS.md
│   ├── 10-ADMIN.md
│   ├── 11-COPY-E-CONTEUDO.md
│   ├── 12-CODEX-TASKS.md
│   ├── 13-CRITERIOS-DE-ACEITE.md
│   └── 14-PENDENCIAS.md
├── prompts/
│   ├── 01-SCAFFOLD.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-CATALOGO.md
│   ├── 04-CARRINHO.md
│   ├── 05-CHECKOUT-PAGARME.md
│   ├── 06-TRACKING-SEO.md
│   └── 07-ADMIN.md
└── seed/
    ├── categories.example.json
    └── products.example.json
```

## Próxima ação recomendada

Copie o prompt de `prompts/01-SCAFFOLD.md` e envie ao Codex como primeira tarefa.
