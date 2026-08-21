# 21 — Matriz de Decisões Galanta

## 1. Objetivo

Esta matriz encerra a Fase 0 do Plano Master e separa decisões confirmadas de informações técnicas ainda pendentes.

As pendências de produto não devem interromper o desenvolvimento da plataforma. Quando faltar uma especificação, o projeto deve usar um placeholder explícito, configurável e incapaz de parecer uma afirmação clínica ou comercial real.

```txt
Fase 0: concluída
Data da decisão: 20/08/2026
Fonte da decisão: responsável pelo projeto
```

## 2. Decisões confirmadas

| Tema | Decisão | Status |
| --- | --- | --- |
| Marca principal | Galanta Medical | Final |
| Linha inicial | Galanta Ortho | Final |
| Categoria estratégica | Tecnologia, engenharia e manufatura digital aplicada à saúde | Confirmada |
| Direção inicial | Órteses e imobilizadores 3D | Confirmada como área de desenvolvimento |
| Público | Profissionais de saúde, clínicas, hospitais e pontos de atendimento | Confirmado |
| Modelo da plataforma | Portal profissional B2B/B2B2C | Confirmado |
| Conversão do MVP | Solicitação de apresentação, amostra, proposta ou planejamento de estoque | Confirmada como fluxo de desenvolvimento |
| Venda aberta | Não implementar até definição comercial e regulatória | Confirmada |
| Pagar.me real | Adiado até existir decisão de venda | Confirmado |
| Banco/storage real | Adiados; manter fundações desacopladas | Confirmado |
| Deploy | Docker em servidor próprio | Confirmado |

## 3. Pendências técnicas não bloqueantes

Os itens abaixo podem ser definidos progressivamente sem impedir design system, arquitetura, componentes, rotas, catálogo configurável, fluxo B2B mockado, admin mockado, SEO estrutural, tracking estrutural, Docker e testes.

| Tema | Status | Regra durante o desenvolvimento |
| --- | --- | --- |
| Nome/modelo do primeiro produto | Pendente | Usar `Produto Galanta Ortho — especificação a confirmar`. |
| Finalidade pretendida | Pendente | Exibir `Finalidade pretendida em validação`; não inferir indicação. |
| Situação regulatória | Pendente | Usar aviso provisório e impedir linguagem de aprovação/regularização. |
| Classificação de risco | Pendente | Não publicar classe ou regime regulatório. |
| Uso permitido de amostras | Pendente | Tratar como avaliação técnica, sem autorizar uso clínico. |
| Materiais | Pendente | Campo configurável com valor `A confirmar`. |
| Tamanhos | Pendente | Estrutura preparada; valores demonstrativos não devem parecer catálogo final. |
| Lados/variações | Pendente | Estrutura preparada; opções finais dependem da ficha do produto. |
| Protocolo térmico | Pendente | Não publicar temperatura, tempo ou instrução operacional. |
| Limpeza, conservação e armazenamento | Pendente | Criar campos; manter conteúdo como `A confirmar`. |
| Preço e política comercial | Pendente | Não exibir preço, parcelamento, desconto ou oferta. |
| Envio de amostras | Pendente | Capturar interesse; endereço somente quando a operação for definida. |
| Catálogo completo | Pendente | Trabalhar com taxonomia e produtos configuráveis. |
| Logos e ativos finais | Pendente | Usar identidade tipográfica controlada e placeholders identificados. |
| Fotografias e renders | Pendente | Usar áreas reservadas; não inventar imagens clínicas ou produtos finais. |
| Responsável por leads e SLA | Pendente | Manter mensagens de retorno sem prazo prometido. |
| Política de privacidade final | Pendente | Não coletar dados reais em produção até revisão jurídica. |

## 4. O que pode avançar agora

- normalização completa da documentação;
- design system Galanta Medical;
- layout, header, footer e navegação;
- nova home e páginas institucionais estruturais;
- tipos configuráveis de linha, produto, variação e documento;
- catálogo mockado claramente identificado;
- solicitação técnica mockada;
- pipeline de leads mockado no admin;
- SEO técnico sem claims e sem ofertas;
- tracking de lead sem dados pessoais;
- acessibilidade, responsividade e performance;
- Docker, lint, build e testes;
- preparação desacoplada para banco, storage e integrações futuras.

## 5. O que permanece bloqueado

As pendências técnicas bloqueiam somente:

- publicação de finalidade ou indicação clínica específica;
- promessa de benefício, desempenho, conforto ou resultado;
- instrução de aquecimento, moldagem ou aplicação com valores reais;
- afirmação de registro, notificação, aprovação ou classe de risco;
- liberação de amostra para uso clínico;
- preço público e venda real;
- ativação do Pagar.me;
- indexação pública de conteúdo técnico não aprovado;
- coleta de dados de pacientes;
- upload de arquivos clínicos;
- disponibilização pública de protocolos e fichas não aprovados.

## 6. Regras padrão para placeholders

Usar:

```txt
Especificação a confirmar
Informação técnica em validação
Conteúdo sujeito à aprovação técnica e regulatória
Fluxo demonstrativo para avaliação profissional
Preço e condição comercial sob consulta
```

Não usar:

```txt
Produto aprovado
Produto regularizado
Indicado para [condição]
Substitui [tratamento]
Resultado garantido
Sem risco
Uso clínico liberado
```

## 7. Proteção de dados durante o desenvolvimento

- usar somente dados fictícios;
- não solicitar nomes, documentos, imagens ou informações de pacientes;
- não colocar informações pessoais em URLs, analytics ou logs;
- formulários mockados devem avisar para não inserir dados de pacientes;
- qualquer upload futuro deverá usar storage privado e autorização adequada.

## 8. Política de atualização

Quando uma informação técnica for fornecida:

1. registrar a fonte, responsável e data;
2. marcar o item correspondente como confirmado;
3. atualizar os documentos específicos;
4. validar impacto em copy, produto, SEO, schema, formulário e admin;
5. implementar em PR próprio quando a mudança atingir código;
6. preservar histórico de decisões relevantes.

## 9. Próxima fase autorizada

As Fases 1 a 5 estão concluídas. A Fase 6 pode começar sem aguardar as pendências técnicas: migrar o admin mockado de pedidos para um pipeline de leads técnicos, sem faturamento, pagamento ou dados reais.
