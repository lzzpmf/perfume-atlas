# Scandal Pour Homme — direção visual

## Identificação

- Objeto: Jean Paul Gaultier Scandal Pour Homme Eau de Toilette.
- Destino: cinco cards verticais 3:4, 2880 × 3840 px.
- Asset: PNG RGBA transparente; `transparent_background: true`; enquadramento próprio.
- Caminho: `output/images/scandal-pour-homme-eau-de-toilette-transparent.png`.
- Referência morfológica da sálvia esclareia: [RHS, Salvia sclarea](https://www.rhs.org.uk/plants/41249/salvia-sclarea/details). Não comprova a origem dos materiais no perfume.

## Prompt principal

Criar ilustração botânica naturalista contemporânea para um atlas olfativo premium. Representar um ramo de sálvia esclareia com folhas largas, enrugadas e verde-acinzentadas, inflorescência ramificada, brácteas claras rosadas e pequenas flores bilabiadas. Junto à base, mandarina inteira e cortada, três sementes alongadas de tonka, um pequeno feixe de raízes fibrosas de vetiver e dois pedaços discretos de caramelo como símbolo do acorde gourmand.

Assuntos independentes, completos, composição assimétrica vertical com margens transparentes de aproximadamente 8%. Verde sálvia, malva discreto, laranja de casca, castanho e palha. Luz difusa e microtexturas pictóricas somente sobre os assuntos. Fundo totalmente transparente, sem papel, branco, quadriculado ou cenário. Sem texto, logo, frasco, coroa, luvas de boxe, fumaça, cristais ou flores adicionais. Não confundir sálvia esclareia com espigas de lavanda.

## Composição e materiais

Topo reservado à tipografia; centro ilustrado no card principal e imagem lateral nos demais. Fundo marfim, textura sutil, títulos oliva e tipografia grafite em camadas próprias. Rodapé livre para logo e assinatura. A imagem apresenta notas de fontes identificadas, não uma reconstituição da fórmula.

## Produção

Aplicar `references/logoFullore.png` original, preservando cor, proporção e transparência. Validar alfa em fundos claro e escuro, dimensões reais e leitura dos textos. Adaptar a imagem por escala proporcional, sem corte. Registrar resolução nativa e ampliação; interpolação não acrescenta detalhe nativo. [Prompt efetivamente enviado](scandal-pour-homme-generation.json).

## Resultado — 28/10/2026

- Ilustração produzida com a ferramenta integrada `image_gen`; resolução nativa de 1086 × 1448 px.
- Alfa real confirmado: 774.762 pixels totalmente transparentes. Recorte inspecionado sobre fundo claro e escuro, sem fundo incorporado.
- Cinco cards exportados em 2880 × 3840 px. Escala do asset: 0,775× no principal e 1,094× nos secundários; ampliação de aproximadamente 9,4%, sem detalhe nativo adicional.
- Logo original carregado em todos os cards. Limites de texto e distância ao rodapé verificados; revisão visual do principal e da coleção concluída.
- Fundo, textura, tipografia e imagem separados nos HTMLs editáveis.
- [Relatório de exportação](../cards/finais/scandal-pour-homme/export-report.json).
- Reprodução: `node scripts/render-scandal-pour-homme-cards.cjs`; atualiza somente esta série.
