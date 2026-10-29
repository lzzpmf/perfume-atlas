# Image Prompt Template — Perfume Atlas

## Identificação

- **Aroma:** {{NOME}}
- **Espécie / origem:** {{NOME_BOTANICO_OU_TECNICO}}
- **Destino final:** card vertical 3:4, 2880 × 3840 px (largura × altura; referência 4K pelo lado maior).
- **Ilustração:** enquadramento livre, assunto completo e resolução suficiente para aplicação nesse card; proporção 3:4 não obrigatória para o asset.
- **Arquivo:** PNG RGBA com fundo transparente real; `transparent_background: true`.
- **Destino:** {{STORY | REEL | PINTEREST | CARD_EDITORIAL}}

---

## Prompt principal

Crie uma ilustração botânica transparente em alta resolução, destinada a um card final vertical 3:4 de 2880 × 3840 px, para um atlas olfativo premium dedicado a **{{NOME}}**.

A estética deve combinar **herbário científico contemporâneo, editorial de perfumaria de nicho, clean botanical e quiet luxury**.

No centro, representar **{{DESCRICAO_BOTANICA_VISUAL}}** com alta fidelidade botânica, anatomia naturalista, textura refinada e nível de detalhe de uma prancha botânica de coleção. A ilustração deve parecer sofisticada e contemporânea, não infantil e não excessivamente vintage.

Usar fundo completamente transparente, com canal alfa real. Não desenhar fundo branco, marfim, papel, cenário ou quadriculado. Paleta do assunto baseada em **{{PALETA}}**, com saturação controlada e contraste elegante. O fundo **{{FUNDO_DO_CARD}}** e a textura de papel serão adicionados separadamente na diagramação.

A composição deve reservar áreas transparentes para tipografia: **{{AREAS_DE_RESPIRO}}**. Preservar o assunto completo e detalhes finos sem halo nas bordas. Linhas, marcadores, numeração e eventuais estruturas moleculares verificadas serão aplicados depois, em camadas editoriais.

Iluminação **{{LUZ}}**, sombras suaves, acabamento premium, alta resolução, microdetalhes orgânicos, sensação tátil e impressão fine-art.

A imagem deve comunicar olfativamente **{{DESCRITORES}}** por meio de forma, cor, textura e ritmo visual, sem recorrer a símbolos místicos.

**Sem texto legível, sem letras, sem logotipos, sem marcas d’água; preservar espaço negativo para tipografia editorial posterior.**

---

## Composição sugerida

- topo: {{TOPO}}
- centro: {{CENTRO}}
- laterais: {{LATERAIS}}
- rodapé: {{RODAPE}}

---

## Materiais e textura

{{MATERIAIS_VISUAIS}}

Textura pictórica somente no assunto. Não incorporar superfície de papel ao PNG transparente.

## Diagramação e marca — não enviar ao gerador

Validar dimensões reais de 2880 × 3840 px e proporção 3:4 no card final. No asset, validar canal alfa e resolução suficiente para aplicação. Preservar o assunto completo e margem transparente de aproximadamente 8% da largura. Registrar resolução nativa e eventual ampliação, sem confundir ampliação com detalhe nativo. Adaptar ao card 3:4 por escala proporcional e reposicionamento, sem esticar ou cortar o assunto.

Salvar em `output/images/{{SLUG}}-transparent.png`. Aplicar fundo, texto e o logo obrigatório Fullore de `references/logoFullore.png` em camadas separadas. Manter proporção e cores originais do logo, com área reservada à direita do rodapé. Sem o arquivo, produzir apenas prévia; a exportação final exige logo carregado. Card final: PNG 2880 × 3840 px.

---

## Evitar

- estética genérica de aromaterapia;
- frascos de óleo essencial como protagonista;
- cristais;
- chakras;
- aura colorida;
- fumaça mística;
- folhas aleatórias;
- espécie botânica incorreta;
- saturação excessiva;
- brilho plástico;
- tipografia gerada;
- aparência de banco de imagens;
- composição congestionada.

---

## Variação opcional

{{VARIACAO_DE_DIRECAO_DE_ARTE}}
