# Instruções para Codex

Você está trabalhando em um novo ecommerce standalone.

## Fonte de verdade

A fonte de verdade são os arquivos em `/docs`.

Antes de escrever código:

1. Leia `docs/00-CONTEXTO-DO-PROJETO.md`.
2. Leia `docs/01-PRD.md`.
3. Leia `docs/20-PLANO-MASTER-GALANTA-MEDICAL.md`.
4. Leia `docs/21-MATRIZ-DE-DECISOES-GALANTA.md`.
5. Leia os documentos 16–19 relacionados a marca, compliance, produto e fluxo B2B quando aplicáveis.
6. Leia o documento específico da task em andamento.
7. Se encontrar conflito material entre documentos normalizados, pergunte antes de implementar.

## Restrições absolutas

- Não usar Base44.
- Marca final: Galanta Medical.
- Linha inicial final: Galanta Ortho.
- Não inventar nome, finalidade, indicação, especificação ou claim de produto ainda não fornecido.
- Detalhes técnicos pendentes não bloqueiam o desenvolvimento estrutural; usar placeholders explícitos conforme `docs/21-MATRIZ-DE-DECISOES-GALANTA.md`.
- Usar `http://localhost:3000` como URL local/base até que o domínio final seja definido.
- Gateway futuro previsto: Pagar.me, condicionado à aprovação do modelo comercial; não implementar no MVP B2B.
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

Se faltar produto/modelo, finalidade, especificação, preço, imagem, domínio ou regra comercial, use placeholders explícitos e documentados, nunca invente dados definitivos.

Exemplo:

```txt
Marca: Galanta Medical
Linha: Galanta Ortho
Produto/modelo: A confirmar
Material: A confirmar
Preço e condição comercial: Sob consulta
```

## Definição de pronto

Uma task só está pronta quando:

- O build passa.
- O lint não apresenta erros críticos.
- A tela funciona em mobile e desktop.
- As regras dos docs foram respeitadas.
- Não há dados sensíveis hardcoded.
- O README ou docs foram atualizados se a task mudou comportamento relevante.
