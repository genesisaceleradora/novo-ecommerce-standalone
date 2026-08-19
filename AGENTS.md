# Instruções para Codex

Você está trabalhando em um novo ecommerce standalone.

## Fonte de verdade

A fonte de verdade são os arquivos em `/docs`.

Antes de escrever código:

1. Leia `docs/00-CONTEXTO-DO-PROJETO.md`.
2. Leia `docs/01-PRD.md`.
3. Leia o documento específico da task em andamento.
4. Se encontrar conflito entre documentos, pergunte antes de implementar.

## Restrições absolutas

- Não usar Base44.
- Não inventar nome final do projeto.
- Não inventar produto principal final.
- Usar `http://localhost:3000` como URL local/base até que o domínio final seja definido.
- Gateway de pagamento: Pagar.me.
- Não espalhar scripts de tracking manualmente nas páginas.
- Não expor arquivos pessoais de clientes em storage público.
- Não implementar checkout com captura direta de cartão sem arquitetura segura e sem seguir documentação oficial do Pagar.me.
- Não criar painel administrativo complexo no MVP.
- Trabalhar mobile first.

## Padrão de implementação

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizáveis.
- Código limpo, sem duplicação desnecessária.
- Rotas claras.
- Dados mockados no MVP, depois migráveis para banco.
- SEO e tracking centralizados.
- Commits/PRs pequenos.

## Quando faltar informação

Se faltar nome, produto, preço, imagem, domínio ou regra comercial, use placeholders explícitos e documentados, nunca invente dados definitivos.

Exemplo:

```txt
Nome da marca: A definir
Produto: A definir
Preço: A definir
```

## Definição de pronto

Uma task só está pronta quando:

- O build passa.
- O lint não apresenta erros críticos.
- A tela funciona em mobile e desktop.
- As regras dos docs foram respeitadas.
- Não há dados sensíveis hardcoded.
- O README ou docs foram atualizados se a task mudou comportamento relevante.
