# 19 — Fluxo B2B Galanta Ortho

## 1. Objetivo

Transformar a conversão do MVP em uma solicitação profissional qualificada, sem compra, pagamento ou indicação clínica.

```txt
Fase 5: concluída em 21/08/2026
Estado: seleção, formulário, API e confirmação mockadas implementadas
Persistência: seleção em localStorage versionado; confirmação e prévia administrativa apenas na sessão
Integrações externas: nenhuma
```

## 2. Jornada

```txt
Descobrir a Galanta
→ Conhecer a linha
→ Ver categoria/produto
→ Selecionar interesse
→ Revisar solicitação
→ Informar dados profissionais
→ Consentir e enviar
→ Receber confirmação
→ Equipe Galanta qualifica o lead
```

## 3. Rotas

```txt
/solicitacao              Resumo das seleções
/solicitacao/dados        Formulário profissional
/solicitacao/confirmacao  Confirmação mockada
```

Durante a migração:

```txt
/carrinho  → /solicitacao
/checkout  → /solicitacao/dados
/obrigado  → /solicitacao/confirmacao
```

Redirecionamentos só entram quando as novas rotas estiverem funcionais.

As três rotas legadas foram redirecionadas após a validação do novo fluxo.

## 4. Seleção técnica

Cada item deve guardar:

```ts
type TechnicalRequestItem = {
  key: string
  productId: string
  productName: string
  productSlug: string
  requestType: TechnicalRequestType
  quantity?: number
  variation?: {
    size?: string
    side?: string
    model?: string
  }
  notes?: string
}
```

Quantidade representa interesse/planejamento, não estoque confirmado ou pedido.

## 5. Tipos de solicitação

- apresentação técnica;
- avaliação de amostra;
- planejamento de estoque;
- projeto Personal;
- contato comercial.

O rótulo “amostra técnica” não deve afirmar disponibilidade, envio ou uso permitido.

## 6. Formulário profissional

Obrigatórios no MVP mockado:

- nome completo;
- profissão/função;
- instituição;
- cidade;
- estado;
- e-mail;
- WhatsApp;
- interesse principal;
- aceite de privacidade;
- confirmação de que não incluiu dados de pacientes.

Condicionais/opcionais:

- registro profissional;
- CNPJ;
- perfil de atendimento;
- volume aproximado;
- observações comerciais/técnicas.

Não solicitar inicialmente:

- CPF;
- endereço completo;
- diagnóstico;
- prontuário;
- imagens clínicas;
- nome ou documento de paciente.

## 7. Validação

- validação no client para experiência;
- validação server-side antes de aceitar o payload;
- limites de tamanho e caracteres;
- enum para profissão, estado, interesse e tipo de solicitação;
- sanitização de campos livres;
- mensagens sem revelar detalhes internos;
- payloads completos não devem ir para logs.

## 8. Persistência do MVP

Enquanto não houver banco:

- seleção persistida em `localStorage` com chave/versionamento próprios;
- confirmação guardada apenas na sessão quando possível;
- dados profissionais não devem permanecer indefinidamente no navegador;
- mocks usam somente dados fictícios;
- API mockada não envia e-mail, WhatsApp ou arquivo.

## 9. Confirmação

A página deve informar:

- identificador demonstrativo;
- tipo de solicitação;
- itens selecionados;
- que nenhum pagamento foi realizado;
- que disponibilidade, condições e próximos passos serão confirmados;
- nenhum prazo de retorno até o SLA ser definido.

## 10. Admin mockado

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

Detalhe:

- dados profissionais;
- instituição;
- interesse;
- itens e configurações;
- origem/UTMs;
- consentimentos;
- histórico mockado;
- observações internas.

## 11. Tracking

Eventos:

```txt
ViewContent
FormStart
FormSubmit
Lead
TechnicalPresentationRequested
TechnicalSampleRequested
StockPlanningRequested
```

Não disparar `InitiateCheckout` ou `Purchase`. Nunca enviar campos pessoais ou observações para analytics.

## 12. Evolução futura

Quando autorizado:

- persistir leads em banco;
- integrar CRM/notificação;
- armazenar consentimentos;
- adicionar SLA e responsável;
- coletar endereço somente em etapa de envio;
- implementar documentos privados se necessários;
- converter oportunidade em proposta, contrato ou pedido;
- avaliar Pagar.me apenas no fluxo comercial aprovado.

## 13. Critérios de aceite

- produto pode ser adicionado à solicitação;
- tipo e configuração são preservados;
- usuário pode revisar e remover itens;
- formulário valida dados mínimos;
- aviso de dados de pacientes é visível;
- envio mockado gera confirmação;
- nenhum pagamento é iniciado;
- admin mockado exibe o lead;
- tracking não recebe PII;
- fluxo funciona em mobile e desktop;
- recarga não importa carrinho B2C legado.

Os critérios acima foram implementados na Fase 5. A exibição administrativa é uma prévia transitória da última solicitação da sessão; o pipeline persistente mockado será implementado na Fase 6.
