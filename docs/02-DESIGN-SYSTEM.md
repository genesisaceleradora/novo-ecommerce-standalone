# 02 — Design System Galanta Medical

## 1. Direção

Conceito: **Clinical Tech Industrial**.

O sistema deve parecer médico, tecnológico, industrial, premium e confiável. A antiga estética emocional da Eternize está descontinuada.

## 2. Paleta

```txt
Galanta Black:    #050A0D
Graphite Medical: #0B1117
Deep Slate:       #111827
Medical Cyan:     #00B8C7
Clinical Aqua:    #2EE6F0
Sterile White:    #F7FAFC
Mist Gray:        #D8E1E8
Steel Gray:       #7A8A99
Signal Green:     #21C47B
Alert Amber:      #F2B84B
Clinical Red:     #E05252
```

Hero, header e blocos institucionais podem ser escuros. Leitura longa, fichas e formulários devem priorizar fundo claro. Estados nunca dependem apenas da cor.

## 3. Tipografia

```txt
Títulos: Sora
Texto e UI: Inter
Labels/dados técnicos: IBM Plex Mono
```

Carregar fontes de forma centralizada com `next/font` quando possível.

## 4. Layout

```txt
Container: 1200–1280px
Padding mobile: 20px
Padding desktop: 32–48px
Seções mobile: 48–72px
Seções desktop: 72–120px
```

Usar grid técnico, linhas finas e ritmo previsível. Evitar excesso de glow, animação ou ornamento futurista.

## 5. Botões

Variantes:

- primary: ciano, alta ênfase;
- secondary: outline;
- ghost: baixa ênfase;
- warning/destructive somente em contexto administrativo.

Regras:

- mínimo 44px de altura; 48px preferencial em mobile;
- foco visível;
- loading e disabled distinguíveis;
- CTA usa solicitar, conhecer, avaliar ou planejar;
- não usar “comprar” no MVP B2B.

## 6. Cards

### Produto

- linha e status;
- nome/modelo;
- resumo;
- configuração quando confirmada;
- CTA técnico;
- sem preço, desconto, avaliação ou estoque fictício.

### Benefício/capacidade

Comunicar processo ou capacidade, não resultado clínico.

### Aviso

Separar informação pendente, restrita e aprovada com ícone, rótulo e texto.

## 7. Badges

```txt
STANDARD
PERSONAL
AMOSTRA TÉCNICA
EM DESENVOLVIMENTO
ESPECIFICAÇÃO A CONFIRMAR
INFORMAÇÃO EM VALIDAÇÃO
```

Badges regulatórios só podem refletir estado aprovado.

## 8. Tabelas e especificações

- `scope="col"`/`scope="row"`;
- responsividade sem scroll oculto;
- labels em IBM Plex Mono;
- valor pendente explícito;
- documentos exibem versão e status.

## 9. Header e topbar

Header deve destacar Galanta Medical, Galanta Ortho, soluções, públicos, materiais e contato. Topbar não usa métricas, avaliações, parcelamento ou prazo fictício; pode mostrar “Portal profissional” e “Informações técnicas em desenvolvimento”.

## 10. Footer

- arquitetura de marca;
- navegação profissional;
- materiais e compliance;
- contato;
- políticas;
- aviso de conteúdo em desenvolvimento.

## 11. Formulários

- label visível;
- descrição e erro associados por `aria-describedby`;
- campos condicionais só quando necessários;
- aviso para não inserir dados de pacientes;
- consentimento não pré-marcado;
- mensagens de sucesso sem prometer prazo.

## 12. Imagens

- placeholders claramente identificados;
- nenhum paciente/profissional usado como prova;
- alt text factual;
- `next/image` e tamanhos responsivos;
- origem/licença/aprovação registradas para ativos finais.

## 13. Mobile e acessibilidade

- mobile first;
- foco visível e navegação por teclado;
- contraste WCAG AA;
- conteúdo sem depender de hover;
- suporte a `prefers-reduced-motion`;
- drawers com foco, Escape e rótulo acessível;
- toque confortável e texto sem zoom.

## 14. Componentes base

```txt
Topbar
Header
Footer
HeroBanner
Button
Container
SectionTitle
Badge
Card
ProductCard
CategoryCard
CapabilityCard
TechnicalTable
ComplianceNotice
FAQ
TechnicalRequestDrawer
TechnicalRequestSummary
ProfessionalForm
```

Componentes legados podem ser refatorados; evitar duplicação apenas para mudar o nome visual.
