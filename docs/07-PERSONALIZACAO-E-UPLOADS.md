# 07 — Personalização e Uploads

## 1. Objetivo

Criar módulo flexível de personalização para produtos que precisem receber nome, frase, foto, arquivo ou observações.

## 2. Regras

- Personalização deve ser ativável por produto.
- Produtos sem personalização não devem exibir campos desnecessários.
- Uploads de clientes devem ser tratados como dados privados.
- Arquivos não devem ser públicos por padrão.

## 3. Campos possíveis

```txt
Nome
Frase
Data
Observações
Dedicatória
Upload de imagem
Upload múltiplo
Link de música/QR Code, se futuro
```

## 4. Experiência do usuário

O formulário deve ser simples:

1. Cliente escolhe produto.
2. Preenche campos necessários.
3. Envia arquivos.
4. Vê resumo da personalização no carrinho.
5. Confirma antes de pagar.

## 5. Validações

- Tamanho máximo do arquivo.
- Tipo permitido: jpg, png, webp, pdf se necessário.
- Campo obrigatório por produto.
- Limite de caracteres.
- Mensagens claras.

## 6. Storage

Estrutura recomendada:

```txt
/orders/{orderId}/uploads/{fileName}
```

## 7. Privacidade

Fotos de clientes, crianças, famílias ou documentos não devem ficar públicas.

Usar:

- Bucket privado.
- URLs assinadas.
- Expiração de links.
- Controle de acesso no admin.

## 8. Carrinho

O item do carrinho deve guardar:

```ts
customization: {
  name?: string
  phrase?: string
  date?: string
  notes?: string
  dedication?: string
  uploadedFiles?: UploadedFile[]
}
```

## 9. Admin

No detalhe do pedido, o admin deve exibir:

- Produto.
- Personalização.
- Arquivos.
- Observações.
- Status.
- Botão para baixar/visualizar arquivos.

## 10. MVP

No MVP, se o storage ainda não estiver configurado, simular upload e deixar a interface preparada.

Não bloquear a criação da base do ecommerce por causa de upload avançado.
