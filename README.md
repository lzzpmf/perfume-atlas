# Perfume Atlas

Um ano de aromas e práticas de atenção: **guia de educação olfativa, relaxamento e contemplação** para adultos, inclusive iniciantes. O primeiro produto previsto é ebook em PDF diagramado e EPUB acessível, com áudio complementar. Cards verticais 3:4 acompanham a coleção; publicação independente com fitas e microamostras é uma fase futura.

## Edição anual

A jornada vai de setembro a agosto: primavera em setembro–novembro, verão em dezembro–fevereiro, outono em março–maio e inverno em junho–agosto. Essa divisão editorial por meses inteiros facilita a leitura; não reproduz as datas astronômicas nem todos os climas brasileiros.

São **48 aromas distintos e quatro integrações sazonais: 52 encontros**. Cada mês oferece quatro práticas em sequência; dias e semanas excedentes permitem pausa e retomada. Não há datas fixas ou compensação de práticas perdidas. As 12 fichas existentes BOA-004 a BOA-015 ocupam a primavera na ordem original; outros 36 aromas estão pendentes de curadoria.

- [Área editorial](editorial/README.md): organização, modelos e estado da entrega.
- [Índice do livro](editorial/indice-do-livro.md) e [calendário anual](editorial/calendario-anual.md).
- [Manifesto da edição](editorial/edicao-anual.json) e [contrato dos campos](editorial/manifesto-da-edicao.md).
- [Produção de PDF, EPUB e impresso](editorial/producao.md).
- [Áudio, transcrição e QR codes](editorial/audio-e-qr.md).
- [Kit olfativo futuro](editorial/kit-olfativo.md).

Nesta etapa existe a estrutura documental, não o livro completo. Encontros, gravações, links públicos, QR codes e amostras não foram produzidos. As práticas serão opcionais, com alternativa sem aroma e possibilidade de interromper, sem promessa de tratamento ou resultado emocional. O texto funcionará integralmente sem internet, áudio ou amostra.

## Objetivo

Transformar matérias-primas aromáticas, moléculas e acordes em conteúdo visual consistente para:

- Instagram Stories e Reels;
- Pinterest;
- carrosséis educativos;
- catálogos digitais;
- materiais de marca;
- encontros semanais e capítulos sazonais;
- roteiros de áudio com transcrição e edição anual;
- fichas de estudo;
- direção de arte para geração de imagens.

O projeto foi estruturado para funcionar bem com agentes de código/IA que respeitem instruções de repositório, como um `AGENTS.md` na raiz.

## Estrutura

```text
perfume-atlas/
├── AGENTS.md
├── README.md
├── references/
│   ├── visual-style.md
│   ├── olfactory-taxonomy.md
│   ├── safety-guidelines.md
│   └── writing-style.md
├── templates/
│   ├── aroma-card.md
│   ├── image-prompt.md
│   └── aroma-profile.json
├── aromas/
│   ├── lavanda.md
│   ├── bergamota.md
│   └── vetiver.md
└── output/
    ├── cards/
    └── prompts/
```

## Como usar

Os modos `perfil`, `card`, `prompt` e `pacote` continuam disponíveis. Para a edição anual, usar `encontro-semanal`, `capitulo-sazonal`, `roteiro-audio`, `card-pratica` e `edicao-anual`, conforme [AGENTS.md](AGENTS.md). O código BOA identifica o aroma; o ID do encontro identifica texto, prática, áudio e QR. Os campos editoriais são opcionais e não alteram os renderizadores existentes.

Exemplo de próxima etapa: “Escreva somente o encontro-001 conforme o manifesto anual e o modelo de encontro semanal, referenciando a ficha de neroli e mantendo áudio e QR pendentes.”

### 1. Criar um novo aroma

Peça ao agente algo como:

```text
Crie o perfil completo de rosa damascena seguindo o sistema do projeto.
```

Saídas recomendadas:

```text
aromas/rosa-damascena.md
output/cards/rosa-damascena-card.md
output/prompts/rosa-damascena-image-prompt.md
```

### 2. Criar apenas o texto de um card

```text
Crie somente o card editorial 3:4 de vetiver. Priorize função perfumística e combinações.
```

### 3. Criar apenas direção de arte

```text
Gere o prompt visual do card de bergamota com estética científica editorial.
```

### 4. Criar uma série

```text
Monte uma série de cinco cards sobre lavanda: Essência, Anatomia, Harmonias, Atmosfera e Uso.
```

## Filosofia editorial

O projeto trabalha em três camadas:

1. **Técnica** — botânica, química, extração, taxonomia e função perfumística.
2. **Sensorial** — textura, temperatura, atmosfera, difusão e associações.
3. **Editorial** — síntese visual e narrativa acessível.

Nenhuma camada deve contradizer as outras.

## Padrão visual

### Coleção Primavera — 12 cards

Prompts individuais em `output/prompts/<slug>-image-prompt.md`; textos em `output/cards/<slug>-card.md`; ilustrações PNG transparentes em `output/images/<slug>-transparent.png`.

O renderizador da primavera já usa composição 3:4 e exporta PNGs em 2880 × 3840 px:

```powershell
node scripts/render-primavera-cards.cjs --preview
# O logo fornecido está em references/logoFullore.png:
node scripts/render-primavera-cards.cjs
```

Prévias e galeria editável: `output/cards/previas/primavera/index.html`. Finais com marca: `output/cards/finais/primavera/`. Os relatórios de exportação registram dimensões, validação de alfa, encaixe dos textos e escala dos assets. Nesta geração, as ilustrações têm 1254 × 1254 px nativos e são aplicadas a até 1470 × 1470 px; a ampliação é de aproximadamente 17%, enquanto texto e layout são renderizados diretamente na resolução final. O comando legado de lavanda permanece separado.

### Assets transparentes e marca Fullore

Ilustrações devem ser PNG com transparência real (canal alfa), geradas com `transparent_background: true`, e salvas em `output/images/<slug>-transparent.png`. Não incorporar papel, marfim ou quadriculado ao asset. Os assets têm enquadramento livre, assunto completo, margens transparentes e resolução suficiente para aplicação no card final. A exigência **3:4, 2880 × 3840 px** refere-se ao card final, não à tela da ilustração. Fundo, textura, texto e marca ficam em camadas separadas na diagramação.

Os cards finais devem ser PNG vertical 3:4, 2880 × 3840 px (largura × altura; referência 4K pelo lado maior). Adaptar o asset transparente por escala proporcional e reposicionamento, sem esticar ou cortar o assunto. Conferir dimensões reais na revisão de produção; registrar resolução nativa e eventual ampliação sem apresentá-la como detalhe nativo. Os assets antigos de 941 × 1672 px não atendem ao novo padrão.

O renderizador legado de lavanda usa layout de 1080 × 1920 px (9:16); o de primavera já exporta 2880 × 3840 px (3:4). A futura atualização de lavanda requer adaptar a grade e revisar enquadramento e legibilidade. Esta etapa documental não altera renderizadores, converte imagens ou reexporta cards.

Todos os cards finais exigem o logo original já fornecido em **`references/logoFullore.png`** (nome exato). Preservar cores, proporção e transparência, em área de marca no rodapé sem sobreposição ao texto. A documentação corrige a grafia antiga do caminho sem modificar a imagem. O livro terá projeto gráfico próprio, sem herdar automaticamente as dimensões dos cards.

Para a série de lavanda:

```powershell
# Atualizar apenas os HTMLs editáveis, mesmo com assets ainda pendentes
node scripts/render-lavanda-cards.cjs --html-only
# Exportar prévias identificadas, permitindo assets antigos e logo ausente
node scripts/render-lavanda-cards.cjs --preview
# Exportar finais: exige cinco recortes transparentes e logo
node scripts/render-lavanda-cards.cjs
```

Dependência do renderizador: `npm install --prefix .tools/card-render playwright --no-audit --no-fund`; usa Microsoft Edge instalado no Windows.

Recortes esperados: `lavanda-01-essencia-transparent.png`, `lavanda-02-anatomia-transparent.png`, `lavanda-03-harmonias-transparent.png`, `lavanda-04-atmosfera-transparent.png` e `lavanda-05-uso-transparent.png`, em `output/images/`.

O renderizador verifica pixels realmente transparentes e logo carregado. Prévia não substitui a revisão do recorte sobre fundos claros e escuros. Finais em `output/cards/finais/`; prévias em `output/cards/previas/`. Os PNGs antigos sem transparência e os cards exportados antes desta diretriz são históricos e ainda não atendem ao novo padrão. Atualizar HTMLs não altera os PNGs já exportados.

Formato-base:

- proporção: 3:4;
- resolução recomendada: 2880 × 3840 px ou superior;
- fundo: marfim, papel mineral, branco quente ou tonalidade botânica muito clara;
- ilustração: botânica científica contemporânea, detalhada e naturalista;
- tipografia: serifada editorial + sans-serif neutra;
- composição: ampla área de respiro, poucos blocos, linhas finas e microdetalhes de arquivo científico.

Detalhes completos em `references/visual-style.md`.

## Segurança e evidência

Este projeto não usa aromaterapia como justificativa para alegações de cura. Conteúdos sobre bem-estar devem distinguir:

- percepção sensorial;
- uso tradicional;
- evidência experimental;
- evidência clínica;
- limites de segurança.

Ver `references/safety-guidelines.md`.

## Templates

- `templates/aroma-card.md`: ficha-mestre de conteúdo.
- `templates/image-prompt.md`: estrutura de prompt visual.
- `templates/aroma-profile.json`: representação estruturada para automações, scripts ou banco de dados.
- [Modelos da edição anual](editorial/README.md): aberturas de estação e mês, encontro semanal, prática breve, roteiro de áudio, card de prática, integração sazonal e especificação de amostra.

`editorial_refs` no perfil estruturado é opcional, inicialmente vazio; quando usado, contém referências à edição e aos encontros conforme o contrato do manifesto. A ficha em `aromas/` continua sendo a fonte técnica comum para livro, card e roteiro.

## Exemplos incluídos

A pasta `aromas/` contém as 12 fichas de primavera e três referências iniciais:

- lavanda;
- bergamota;
- vetiver.

Elas servem como padrão de densidade e tom, não como limite criativo.

## Regra central

O Perfume Atlas deve parecer um **arquivo olfativo premium**, não uma coleção genérica de posts sobre óleos essenciais.
