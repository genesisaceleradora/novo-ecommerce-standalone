# 16 — Brand Guide Galanta Medical

## 1. Arquitetura de marca

```txt
Marca master: Galanta Medical
Linha inicial: Galanta Ortho
Categoria de desenvolvimento: órteses e imobilizadores 3D
Produto/modelo específico: a confirmar
```

Galanta Medical representa tecnologia, engenharia e manufatura digital aplicada à saúde. Galanta Ortho é a primeira linha e organiza a comunicação voltada à rotina ortopédica profissional.

## 2. Posicionamento

Posicionamento institucional:

> Tecnologia, engenharia e manufatura digital aplicada à rotina clínica.

Frase central proposta, sujeita a aprovação de comunicação:

> Pronta quando o paciente precisa. Personalizada quando o caso exige.

Promessa de plataforma:

> Estrutura profissional para apresentar soluções Standard e Personal, qualificar interesse técnico e apoiar a construção de disponibilidade nos pontos de atendimento.

## 3. Públicos

Prioritários:

- ortopedistas;
- fisioterapeutas;
- terapeutas ocupacionais;
- clínicas;
- hospitais;
- gestores e compradores de pontos de atendimento.

O site não deve estimular autodiagnóstico, automedicação ou compra sem avaliação profissional.

## 4. Personalidade

A marca deve parecer:

- clínica, sem ser hospitalar genérica;
- tecnológica, sem ficção futurista;
- industrial, sem frieza excessiva;
- premium, sem ostentação;
- objetiva, confiável e aplicável à rotina profissional.

## 5. Pilares de comunicação

### Disponibilidade

Comunicar estrutura, planejamento, estoque e reposição sem prometer prazo ainda não confirmado.

### Adaptação

Comunicar arquitetura de produto configurável. Não publicar parâmetros térmicos ou instruções antes da aprovação técnica.

### Personalização

Comunicar soluções Personal para casos selecionados, sem inferir indicação, eficácia ou adequação clínica.

## 6. Identidade visual

Conceito: **Clinical Tech Industrial**.

### Paleta

```txt
Galanta Black:   #050A0D
Graphite Medical:#0B1117
Deep Slate:      #111827
Medical Cyan:    #00B8C7
Clinical Aqua:   #2EE6F0
Sterile White:   #F7FAFC
Mist Gray:       #D8E1E8
Steel Gray:      #7A8A99
Signal Green:    #21C47B
Alert Amber:     #F2B84B
Clinical Red:    #E05252
```

Regras:

- hero e blocos institucionais podem usar fundos escuros;
- leitura longa, formulários e fichas devem priorizar fundos claros;
- ciano é destaque, não preenchimento dominante;
- verde representa apenas status positivo real;
- âmbar representa pendência ou aviso;
- vermelho é reservado a erro e alerta;
- nenhuma cor deve ser usada como único meio de transmitir estado.

### Tipografia

```txt
Headings: Sora
Body/UI: Inter
Labels técnicos: IBM Plex Mono
```

Fontes devem ser carregadas pela infraestrutura central do Next.js, com fallbacks adequados e sem scripts externos dispersos.

## 7. Componentes

### Botões

- Primário: ciano sobre fundo escuro ou texto escuro sobre ciano.
- Secundário: outline com contraste adequado.
- Altura mínima de toque: 44px; preferencialmente 48px em mobile.
- Verbos: solicitar, conhecer, avaliar, planejar, falar.

### Badges

Permitidos como estrutura:

```txt
STANDARD
PERSONAL
AMOSTRA TÉCNICA
ESPECIFICAÇÃO A CONFIRMAR
INFORMAÇÃO EM VALIDAÇÃO
```

Tamanhos, lados, materiais e status só entram quando confirmados ou claramente marcados como demonstrativos.

### Cards e tabelas

- borda fina e contraste discreto;
- hierarquia clara entre linha, produto e status;
- labels técnicas em mono;
- sem preço ou desconto fictício;
- sem badge “mais vendido”, avaliação ou estoque sem dados reais.

## 8. Fotografia e imagens

Até existirem ativos aprovados:

- usar áreas reservadas ou abstrações geométricas neutras;
- identificar imagens como placeholders;
- não gerar representação clínica que pareça evidência real;
- não mostrar pacientes, profissionais ou ambientes como prova de uso;
- não inventar produto, anatomia, protocolo ou aplicação.

Ativos finais devem registrar origem, licença, versão e aprovação.

## 9. Tom de voz

Usar linguagem:

- profissional;
- técnica na medida certa;
- direta;
- sóbria;
- transparente sobre pendências;
- orientada a processo e avaliação.

Evitar:

- exagero emocional;
- superlativos sem evidência;
- urgência artificial;
- promessa clínica;
- linguagem voltada à compra impulsiva;
- jargão sem explicação.

## 10. Acessibilidade

- contraste mínimo compatível com WCAG AA;
- foco visível;
- labels persistentes em formulários;
- ícones com nome acessível quando necessário;
- conteúdo compreensível sem depender de animação;
- tabelas responsivas e com cabeçalhos semânticos;
- respeito a `prefers-reduced-motion`.

## 11. Governança

Marca e linha são finais. Logo, produto, especificações e ativos ainda podem ser atualizados sem bloquear o sistema. Toda mudança material neste guia deve indicar origem, data e responsável pela decisão.
