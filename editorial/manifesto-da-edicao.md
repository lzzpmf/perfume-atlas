# Contrato documental da edição

`edicao-anual.json` é um manifesto editorial adicional, não uma entrada dos renderizadores atuais. Perfis antigos continuam válidos sem nenhum campo novo. Nesta etapa não se altera o comportamento de scripts existentes.

## Identidade e caminhos

- `edition_id`: identificador permanente da edição; `version` controla revisões editoriais.
- `seasons` e `months`: ordem de navegação setembro–agosto.
- `encounters`: 48 encontros `aroma` e quatro `integration`.
- `id`: identidade estável do encontro, compartilhada por conteúdo, prática, roteiro, transcrição, página de áudio e QR. Não é o código botânico nem um número de semana civil.
- `position`: ordem de leitura 1–52; pode mudar sem renomear o `id`.
- `month_position`: 1–4 para aromas; `null` para integração sazonal.
- `aroma_ref`: objeto com `slug`, `collection_code` e `profile_path`, ou `null` enquanto faltar curadoria. Integrações não exigem aroma.
- `content_ref` e `practice_ref`: caminho de conteúdo existente ou `null`. Nunca apontar para um arquivo ainda não criado como se estivesse pronto.
- `audio`: identidade, referências, versão, créditos/direitos e estado de publicação; valores ainda desconhecidos são `null`.
- `editorial_status`: situação do encontro, separada da existência de sua ficha.

Todos os caminhos não nulos são relativos à raiz do repositório. Convenção futura: `editorial/encontros/<id>.md`, `editorial/praticas/<id>.md`, `editorial/audio/<id>-roteiro.md` e `editorial/audio/<id>-transcricao.md`. Não criar esses arquivos automaticamente nesta etapa. Os identificadores `encontro-001` a `encontro-048` e `integracao-primavera`, `integracao-verao`, `integracao-outono`, `integracao-inverno` são independentes dos códigos BOA.

## Estados e campos opcionais

`pending_curation` significa aroma ainda não selecionado; `pending_writing`, ficha vinculada mas encontro não escrito; `draft`, texto em redação; `reviewed`, revisão editorial concluída; `ready`, requisitos de produção atendidos; `published`, conteúdo efetivamente publicado. Integrações começam em `pending_writing`. Trocar um aroma em revisão não autoriza reaproveitar um áudio incompatível sem revisá-lo.

Áudio usa `pending`, `script_draft`, `recorded`, `reviewed` e `published`. `url_validated` começa falso. Não marcar publicação por simples preenchimento de URL. Registrar a verificação real do destino, a transcrição disponível e a liberação dos direitos. `exclusive_rights_confirmed` começa falso: uma faixa planejada como exclusiva não é prova de exclusividade contratual.

O manifesto é a fonte da relação estação/mês/aroma. Uma eventual propriedade `editorial_refs` no perfil é opcional e contém apenas referências à edição e aos encontros; não duplicar calendário ou texto. Ausência dessa propriedade não constitui erro. Os perfis existentes não serão migrados nesta etapa.

O modelo `templates/aroma-profile.json` apresenta `editorial_refs: []`. Uma referência futura tem a forma `{"edition_id": "atlas-anual-01", "encounter_id": "encontro-001"}`. Esta associação exemplifica o vínculo, não atribui um aroma ao perfil genérico. A posição e o mês devem ser consultados no manifesto.

## Critérios de aceitação

Quatro estações, 12 meses, quatro posições de aroma por mês, 48 posições com IDs únicos e quatro integrações, uma após cada estação. Ao concluir a curadoria, os 48 slugs devem ser distintos. Enquanto pendente, `null` é permitido e não conta como aroma duplicado. A primavera deve apontar para BOA-004 a BOA-015 na ordem estabelecida; os outros 36 slots mantêm `aroma_ref: null` e `pending_curation`.

Manter [calendário legível](calendario-anual.md) sincronizado com o manifesto. Verificar existência de todos os caminhos preenchidos e não confundir ausência de roteiro com ausência de ficha técnica.
