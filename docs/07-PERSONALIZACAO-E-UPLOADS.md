# 07 — Configuração Técnica e Arquivos

## 1. Mudança de domínio

A personalização afetiva do ecommerce anterior será substituída por configuração técnica de produto e interesse profissional.

Remover progressivamente:

```txt
Nome personalizado
Frase
Data comemorativa
Dedicatória
Música
Fotos pessoais
```

Preparar:

```txt
Tamanho
Lado
Modelo/versão
Tipo de solicitação
Quantidade estimada
Observação comercial/técnica sem dados de paciente
```

## 2. Regras

- configuração vem do produto;
- campos pendentes não aparecem como opção final;
- produtos sem variação funcionam normalmente;
- estado da seleção é preservado no resumo;
- nenhum campo pode induzir indicação clínica;
- nenhum dado de paciente deve ser solicitado.

## 3. Uploads no MVP

Upload clínico ou pessoal não será implementado. A interface pode preparar o conceito de documentos técnicos aprovados, mas não deve aceitar exames, fotografias, prescrições ou prontuários.

## 4. Documentos da Galanta

Materiais técnicos devem possuir:

- título;
- tipo;
- produto aplicável;
- versão;
- status;
- data;
- responsável;
- visibilidade pública ou restrita.

Somente documentos aprovados podem ser públicos.

## 5. Storage futuro

Se arquivos restritos forem necessários:

```txt
/organizations/{organizationId}/requests/{requestId}/files/{fileId}
```

Requisitos:

- bucket privado;
- URLs assinadas curtas;
- autorização server-side;
- tipo/tamanho permitidos;
- malware scanning quando aplicável;
- auditoria de acesso;
- retenção e exclusão;
- proibição de nome original no path quando expuser PII.

## 6. Privacidade

- não coletar dados de pacientes no MVP;
- aviso explícito em campos livres;
- não persistir conteúdo sensível em localStorage;
- não expor arquivo em analytics, URL ou log;
- não usar storage público;
- LGPD e base legal precisam de validação antes da operação.

## 7. Migração do carrinho legado

- nova chave/versionamento de armazenamento;
- não converter automaticamente personalizações antigas;
- descartar estado legado de forma segura na primeira migração;
- tipo do novo item deve usar `variation`/`technicalRequest`, não `customization` afetiva.

## 8. Aceite

- configuração aparece somente quando disponível;
- seleção chega ao resumo e confirmação;
- quantidade pode mudar sem perder configuração;
- recarga preserva somente dados não sensíveis;
- aviso de dados de paciente é visível;
- nenhum upload real é executado.
