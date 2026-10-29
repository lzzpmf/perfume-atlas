# Phantom — direção de arte e prompt

## Identificação

- Objeto: Phantom Eau de Toilette, Rabanne; representação editorial de notas.
- Botânica: espécies e origens dos ingredientes não confirmadas. Não inserir nomes latinos como identificação do conteúdo do perfume.
- Destino: card vertical 3:4, 2880 × 3840 px.
- Asset: PNG RGBA, enquadramento livre, `transparent_background: true`.
- Estado: imagem gerada com a ferramenta integrada `image_gen`, transparência real validada; cinco cards exportados.

## Prompt principal

Crie uma ilustração naturalista para um atlas olfativo contemporâneo, destinada à diagramação posterior em card 3:4 de 2880 × 3840 px. Represente separadamente ramos floridos de lavanda, um limão inteiro acompanhado de uma seção e duas vagens curadas de baunilha. São símbolos das notas divulgadas de um perfume composto, não uma planta híbrida nem uma demonstração de sua fórmula.

Organize os três assuntos completos em diagonal suave, com a lavanda como elemento vertical, o limão à esquerda e as vagens em contraponto inferior. Preserve anatomia reconhecível, microtexturas orgânicas, margens transparentes de aproximadamente 8% e áreas vazias no topo e nas laterais. Não cortar nem deformar os assuntos.

Use lilás acinzentado, verde discreto, amarelo de casca e marrom profundo, com saturação contida. Luz difusa, textura pictórica somente sobre os elementos, acabamento de herbário contemporâneo. Fundo inteiramente transparente com alfa real, sem papel, cor sólida, quadriculado ou halo. Sem letras, texto, logotipos, frasco, robô, fórmulas químicas, fumaça, cristais, folhas aleatórias ou brilho plástico.

## Composição e materiais

Topo para título; centro com 35–55% de presença ilustrativa; laterais para módulos curtos; rodapé livre para assinatura e marca. Marfim mineral e textura de papel pertencem ao layout, em camadas separadas. Paleta editorial: marfim, lilás, amarelo discreto e grafite. Título serifado; corpo sans-serif.

## Diagramação e marca — não enviar ao gerador

Salvar futuramente em `output/images/phantom-eau-de-toilette-transparent.png`, preservando versões anteriores. Conferir alfa em fundos claro e escuro, dimensões nativas e resolução de aplicação; registrar eventual ampliação. Adaptar proporcionalmente. Inserir o arquivo original `references/logoFullore.png` no rodapé, preservando cor, proporção e transparência. Sem logo validado, somente prévia. Exportar o card em 2880 × 3840 px e verificar legibilidade mobile. Não apresentar a ilustração como prova de ingredientes naturais.

## Registro de geração — 28/10/2026

Ferramenta integrada `image_gen`; `transparent_background: true`. Asset salvo em `output/images/phantom-eau-de-toilette-transparent.png`, nativo 1086 × 1448 px. Os cinco cards têm 2880 × 3840 px; escala do asset de 0,775× no principal e 1,094× nos demais, sem alegação de detalhe 4K nativo. Textura, fundo, texto e logo permanecem separados nos layouts HTML. A imagem inclui flor e folhas de cítrico como contexto ilustrativo; não são notas adicionais confirmadas.

Prompt efetivamente enviado:

> Use case: scientific-educational. Create a premium contemporary botanical illustration, a standalone PNG asset with REAL transparent alpha background for a later 2880x3840 editorial card. Depict a graceful loose arrangement of flowering lavender stems, one whole yellow lemon with a cut lemon half, and two cured dark brown vanilla pods. These represent perfume notes, not proof of botanical ingredients. Lavender rises vertically toward upper right, lemon on lower left, vanilla pods curve toward lower right. All subjects entire, no cropping, 8% transparent margins. Finely detailed naturalistic painterly herbarium, organic microtextures, restrained dusty lilac and sage green with lemon yellow, dark brown pods. Soft diffuse light. Sophisticated niche-perfumery editorial. Only subject has painterly texture. No background color or paper or checkerboard, no cast floor, no lettering, labels, logo, watermark, bottle, robot, molecular drawings, smoke, crystals. Large resolution suitable for print, transparent negative space around arrangement. Preserve distinct recognizable anatomy of each botanical subject.

Relatório por card: `output/cards/finais/phantom/export-report.json`. Reprodução: `node scripts/render-phantom-cards.cjs`.
