# Man in Black — direção visual

## Identificação

- Objeto: Bvlgari Man in Black Eau de Parfum, descrição clássica.
- Destino: cinco cards verticais 3:4, PNG 2880 × 3840 px.
- Asset: PNG RGBA transparente, enquadramento próprio, `transparent_background: true`.
- Caminho: `output/images/bvlgari-man-in-black-eau-de-parfum-transparent.png`.
- Botânica visual: tuberosa, com referência morfológica em [University of Arkansas Extension](https://www.uaex.uada.edu/yard-garden/resource-library/plant-week/tuberose-8-21-09.aspx). Sem atribuir espécie ou fornecedor à fórmula do perfume.

## Prompt principal

Criar uma ilustração naturalista contemporânea para um atlas olfativo premium. Uma haste de tuberosa com flores brancas pequenas, cerosas e tubulares, reunidas na porção terminal, botões fechados no alto e poucas folhas estreitas na base. Junto à base, rizoma seco de íris, três sementes de tonka, pequenos pedaços de resina representando benjoim, lascas de madeira representando guaiaco e uma dobra discreta de camurça castanha como símbolo do acorde de couro.

Composição assimétrica vertical, assuntos completos e separados visualmente, margens transparentes de aproximadamente 8%. Microtexturas orgânicas, luz difusa, marfim, verde oliva discreto, castanho profundo e caramelo. Acabamento pictórico refinado, sem folhas decorativas extras. Fundo inteiramente transparente com alfa real. Sem texto, logo, frasco, chamas, fumaça, cristais, copos ou produtos de tabaco. Não representar especiarias específicas que as fontes não identificam.

## Composição e materiais

Topo reservado ao título. Centro botânico dominante; módulos laterais nos cards secundários. Fundo marfim, papel sutil, tipografia grafite e títulos castanhos pertencem à diagramação. Rodapé independente para assinatura e logo. A imagem simboliza parte das notas; não é uma reconstituição da fórmula.

## Produção e controle

Aplicar `references/logoFullore.png` original, sem recolorir ou deformar. Preservar versões anteriores da imagem. Validar alfa sobre fundo claro e escuro; registrar dimensões nativas e escala no relatório de exportação. Adaptar proporcionalmente, sem corte. Não apresentar interpolação como detalhe nativo. Conferir logo, limites dos textos e dimensões efetivas dos cinco PNGs. Prompts efetivamente enviados e revisão botânica registrados no JSON de geração associado.

## Resultado — 28/10/2026

- Ferramenta integrada `image_gen`, com transparência ativada na geração e na edição.
- [Prompts exatos e histórico](bvlgari-man-in-black-generation.json).
- Asset selecionado: 1086 × 1448 px nativos; primeira tentativa preservada como `bvlgari-man-in-black-eau-de-parfum-v1-transparent.png`, não aprovada para os cards devido à forma das flores.
- Cinco PNGs finais: 2880 × 3840 px. Asset em escala de 0,878× no card principal e 1,094× nos demais; ampliação de aproximadamente 9,4%, sem ganho de detalhe nativo.
- Alfa: 997.910 pixels totalmente transparentes, com pixels parcialmente transparentes nas bordas e no assunto. Recorte revisado sobre fundos claro e escuro.
- Logo original carregado em todos os layouts; verificação automática de limites do texto aprovada. Revisão visual da coleção e do card principal concluída.
- [Relatório de exportação](../cards/finais/bvlgari-man-in-black/export-report.json).
- Reprodução local: `node scripts/render-bvlgari-man-in-black-cards.cjs`. Reexecução atualiza somente esta coleção; outras séries permanecem preservadas.
