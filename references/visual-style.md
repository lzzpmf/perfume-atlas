# Visual Style — Perfume Atlas

## 1. Direção principal

A identidade visual combina quatro referências:

- herbário científico contemporâneo;
- editorial de perfumaria de nicho;
- laboratório botânico elegante;
- quiet luxury.

Palavras-chave:

**clean botanical · scientific editorial · tactile paper · naturalistic illustration · refined minimalism · olfactory archive**

---

## 2. Formato

### Ilustração botânica — asset independente

- proporção: livre, conforme o assunto;
- resolução: suficiente para o tamanho de aplicação no card final de 2880 × 3840 px;
- a exigência 4K e 3:4 aplica-se ao card final, não à tela do asset;
- formato: PNG RGBA com transparência real;
- assunto completo, com margem transparente de aproximadamente 8% da largura;
- dimensões efetivas devem ser conferidas no arquivo, não apenas declaradas no prompt;
- registrar resolução nativa e eventual ampliação; ampliação não equivale a detalhe nativo.

Adaptar o asset transparente ao card 3:4 por escala proporcional e reposicionamento, sem deformação ou corte do assunto. As margens em pixels do card não são as margens em pixels da ilustração. Fundo, textura, texto e logo permanecem em camadas independentes.

### Card principal

- proporção: 3:4;
- resolução recomendada: 2880 × 3840 px;
- referência 4K: lado maior de 3840 px, adaptado à proporção 3:4;
- orientação: vertical;
- leitura: mobile-first.

### Margens

Usar margem segura de aproximadamente 6% a 9% da largura.

Evitar texto importante encostado nas bordas.

---

## 3. Composição

### Estrutura preferida

1. cabeçalho editorial;
2. nome comum;
3. nome botânico/técnico;
4. descritores curtos;
5. ilustração botânica central;
6. módulos informativos periféricos;
7. rodapé de arquivo/coleção.

A ilustração deve ocupar aproximadamente 35% a 55% da área visual.

### Regra de respiro

O card precisa continuar elegante quando visto por 1 segundo. Se todas as áreas tiverem informação, reduzir conteúdo.

---

## 4. Ilustração botânica

Priorizar:

- anatomia reconhecível da espécie;
- proporções naturais;
- folhas, flores, frutos ou raízes compatíveis com o material;
- desenho naturalista ou pintura botânica hiper-realista;
- microtexturas orgânicas;
- imperfeições naturais discretas.

Evitar:

- flores genéricas que não correspondem à planta;
- folhas decorativas sem relação botânica;
- aparência plástica;
- saturação excessiva;
- realismo fotográfico clínico quando a proposta for ilustrativa.

---

## 5. Fundo

O fundo descrito nesta seção pertence somente ao layout do card. As ilustrações são assets PNG recortados com canal alfa real, sem papel, retângulo de cor ou quadriculado desenhado. Gerar com `transparent_background: true` e salvar como `output/images/<slug>-transparent.png`. Preservar folhas, flores, hastes e detalhes finos, sem halo claro nas bordas. Validar o recorte sobre fundos claros e escuros.

Separar ilustração, fundo, textura, texto e logo em camadas editáveis. Não simular transparência com `mix-blend-mode`, máscaras de borda ou remoção da cor branca via CSS. O card final é composto sobre fundo editorial e exportado em PNG 2880 × 3840 px.

Bases recomendadas:

- marfim;
- off-white quente;
- papel algodão;
- papel mineral;
- bege acinzentado;
- tonalidade muito clara derivada da planta.

Textura:

- sutil;
- tátil;
- sem ruído digital agressivo;
- semelhante a papel de arquivo, aquarela fina ou impressão premium.

---

## 6. Paleta

A paleta de cada aroma deriva da planta ou de sua percepção olfativa.

### Estrutura cromática

- 1 cor dominante suave;
- 1 cor botânica de suporte;
- 1 neutro;
- 1 acento escuro para tipografia.

### Exemplos

**Lavanda**
- lilás acinzentado;
- verde sálvia;
- marfim;
- grafite suave.

**Bergamota**
- amarelo cítrico pálido;
- verde folha;
- creme;
- oliva escuro.

**Vetiver**
- palha seca;
- verde-terra;
- areia;
- marrom profundo.

Evitar paletas neon ou altamente saturadas, salvo pedido específico.

---

## 7. Tipografia

### Títulos

Serifada editorial elegante, com contraste de hastes e presença clássica.

Características desejadas:

- caixa alta opcional;
- tracking levemente aberto;
- boa leitura em vertical;
- sensação de publicação premium.

### Corpo

Sans-serif neutra e limpa.

Características:

- x-height confortável;
- peso regular ou medium;
- boa leitura no arquivo de 2880 px de largura e em prévia mobile reduzida;
- sem aparência tecnológica excessiva.

### Nome botânico

Pode usar itálico e tamanho reduzido.

---

## 8. Microelementos

Permitidos:

- linhas finas;
- círculos e marcadores discretos;
- pequenas escalas sensoriais;
- nomenclatura latina;
- número da coleção;
- estruturas moleculares em baixa opacidade;
- selos editoriais pequenos;
- códigos como `BOTANICAL OLFACTORY ARCHIVE · Nº 007`.

Evitar:

- ícones infantis;
- excesso de pictogramas;
- emojis;
- ornamentos sem função.

---

## 9. Estruturas moleculares

Podem aparecer como:

- marca d’água;
- detalhe lateral;
- módulo técnico;
- recorte parcial.

Devem ser visualmente corretas quando representarem moléculas reais.

Não transformar o card em página de química orgânica.

---

## 10. Luz e materialidade

Para ilustração híbrida ou still life:

- luz difusa;
- sombra natural suave;
- sensação de manhã nublada, estúdio editorial ou luz de janela;
- papel, vidro fosco, cerâmica, madeira clara ou metal escovado em doses mínimas.

Evitar:

- reflexos comerciais agressivos;
- brilho plástico;
- efeitos 3D chamativos;
- lens flare;
- bokeh decorativo sem contexto.

---

## 11. Hierarquia ideal

### Nível 1
Nome do aroma.

### Nível 2
Nome botânico e descritores.

### Nível 3
Ilustração.

### Nível 4
Perfil, moléculas, combinações e aplicações.

### Nível 5
Curiosidade e assinatura da coleção.

---

## 12. Densidade

Limites recomendados para o card principal:

- título: 1 linha;
- subtítulo: 1 linha;
- descritores: 3 a 5 palavras;
- módulos: 3 a 5;
- cada módulo: 1 a 3 linhas curtas;
- curiosidade: até 180 caracteres.

Conteúdo extra deve virar card secundário.

---

## 13. Cards de sequência

### Essência
Mais visual, menos técnico.

### Anatomia
Mais estrutura, moléculas e facetas.

### Harmonias
Rede de combinações.

### Atmosfera
Mais espaço negativo e linguagem sensorial.

### Uso
Mais técnico, organizado em blocos funcionais.

---

## 14. Elementos proibidos por padrão

- cristais;
- chakras;
- aura colorida;
- mãos emitindo luz;
- fumaça mística;
- frascos genéricos de óleo essencial como protagonista;
- gotas gigantes;
- flores incorretas;
- textos longos renderizados dentro da imagem gerada;
- logos inventados;
- visual “farmácia natural” genérico.

---

## 15. Regra para geração de imagem

O asset botânico deve ter transparência real: usar `transparent_background: true`. Espaço negativo significa pixels transparentes, não uma área marfim. Textura pictórica pode existir no assunto; textura de papel é adicionada somente no layout.

Quando a imagem for gerada por IA e o texto for aplicado depois, incluir no prompt:

> sem texto legível, sem letras, sem logotipos; preservar áreas limpas para tipografia editorial posterior.

## 16. Marca Fullore

Todos os cards finais incluem `references/logoFullore.png`, fornecido pelo usuário. Preservar o arquivo original, sem deformação, recoloração ou recorte. Aplicar com `object-fit: contain` em uma caixa de até 506 × 144 px no lado direito do rodapé, dentro das margens de segurança. A assinatura da coleção fica à esquerda e não invade a área da marca. Ajustar a caixa após inspecionar o logo real se a leitura exigir.

O logo não faz parte do prompt gerador da ilustração. Enquanto estiver ausente, a área permanece reservada no HTML e apenas prévias podem ser exportadas. A exportação final exige o asset original carregado e visível; não usar texto ou logo inventado como substituto.

Isso reduz erros tipográficos e facilita diagramação.
# Aplicação à edição anual

O card mantém proporção 3:4 e 2880 × 3840 px, com ilustração PNG transparente, fundo e tipografia independentes e logo original `references/logoFullore.png`. Um card de prática usa três passos; criar segundo card associado se exceder oito blocos ou comprometer legibilidade.

PDF diagramado e EPUB acessível têm projetos adequados à leitura longa. Não converter o livro em páginas de imagens dos cards: preservar texto selecionável, ordem de leitura, navegação, descrições das ilustrações informativas e transcrições. O EPUB deve permitir redistribuição do texto. O impresso terá formato, margens e projeto gráfico próprios, definidos na fase de produção.

Reservar acesso complementar ao áudio com QR, endereço legível e link clicável nos formatos digitais. Até existir destino validado e transcrição revisada, manter a referência pendente nos arquivos de trabalho; não gerar QR fictício. A prática permanece completa sem acesso ao áudio. Ver `editorial/producao.md` e `editorial/audio-e-qr.md`.
