---
name: reuniao-em-acoes
description: Transforma transcrição, gravação transcrita ou anotações de reunião em decisões tomadas, ações com dono e prazo, e pendências em aberto. Use quando o usuário colar uma transcrição (Meet, Teams, Zoom, Otter), anotações soltas de reunião ou pedir "ata", "resumo da reunião", "o que ficou combinado" ou "quem ficou com o quê".
---

# Reunião em ações

Você recebe o registro de uma reunião e devolve o que precisa sobreviver dela: o que foi decidido, quem faz o quê até quando, e o que ficou sem resposta. O leitor é quem participou e vai cobrar, ou quem não participou e precisa saber o que mudou.

## Antes de escrever

1. Identifique o tipo de material: transcrição automática, anotação manual ou resumo de terceiro. Transcrição automática troca nomes e corta frases; trate nome de pessoa como incerto até aparecer duas vezes de forma consistente.
2. Separe três categorias e não misture: **decidido** (alguém fechou e ninguém reabriu), **discutido** (opiniões, sem fechamento) e **ação** (alguém vai fazer algo). "Faz sentido", "podemos ver isso" e "boa ideia" são discussão, não decisão.
3. Se o material tiver mais de uma reunião ou mais de um assunto sem relação, pergunte qual reunião o usuário quer antes de produzir. Fora isso, não faça perguntas: produza e marque incertezas no texto.

## Formato da saída

Use exatamente estas seções, nesta ordem. Seção vazia recebe a linha "Nenhuma identificada no material" em vez de ser omitida.

**Reunião:** [assunto em uma linha] · [data, se constar] · [participantes citados]

**Decisões**
Lista numerada. Uma decisão por item, frase completa, sem "foi discutido". Se a decisão tiver condição ("se o orçamento for aprovado"), a condição fica na frase.

**Ações**
Tabela com colunas: `#` · `Ação` · `Dono` · `Prazo` · `Origem`.
- `Dono` e `Prazo` só recebem o que está no material. Sem dono: escreva `[não definido]`. Sem prazo: `[não definido]`. Nunca atribua dono por dedução ("ela cuida disso normalmente") nem invente prazo.
- `Origem` recebe `dito` quando alguém se comprometeu explicitamente, ou `inferido` quando a ação está implícita ("alguém tem que mandar isso pro jurídico"). Ação inferida sempre tem dono `[não definido]`.

**Pendências**
Perguntas que apareceram e não foram respondidas, e decisões que ficaram para depois. Uma por linha, formuladas como pergunta.

**Riscos e objeções levantados**
Só o que alguém disse como preocupação. Cite quem, se constar.

**Próximo passo coletivo**
Uma linha: próxima reunião, data ou gatilho ("quando o fornecedor responder"). Se não constar, `[não definido]`.

## Regras

- Escreva em português, na terceira pessoa, sem adjetivos de avaliação ("ótima reunião", "produtiva").
- Quando uma frase do material for ambígua e importante, cite-a literalmente entre aspas em vez de interpretar.
- Não resuma a discussão inteira. Se o usuário quiser o histórico do debate, ele pede depois.
- Limite: a saída inteira cabe em uma tela. Reunião de uma hora raramente gera mais de 8 decisões e 12 ações; se passar disso, verifique se você não está listando discussão como decisão.
- Se o usuário pedir "manda para os participantes", produza também uma versão em e-mail de até 12 linhas: saudação, decisões em 3 linhas, ações como lista curta com dono e prazo, e a pergunta das pendências. Sem a tabela.

## Onde esta skill quebra

- **Transcrição automática com nomes errados.** A skill pode atribuir ação à pessoa errada porque o transcritor confundiu "Renata" com "Renato". Confira a coluna Dono antes de enviar.
- **Decisão que ninguém falou em voz alta.** Se o grupo concordou por silêncio ou por gesto, não está no texto e não vai aparecer. Adicione à mão.
- **Sarcasmo e ironia.** "Claro, vamos fazer tudo até sexta" pode virar ação com prazo. Leia a tabela com o tom da reunião na cabeça.
- **"Combinado" antigo repetido.** Quando alguém relembra uma decisão de outra reunião, ela pode entrar como nova. A seção Decisões lista o que foi *fechado nesta reunião*; se ficar em dúvida, o material não deixa claro e você decide.
- **Reunião sem estrutura.** Conversa de 40 minutos sem pauta gera muitas pendências e poucas decisões. Isso é informação sobre a reunião, não defeito da saída.

## Exemplo

Entrada (trecho):
> Marcelo: A gente precisa fechar o fornecedor até o fim do mês. Eu acho que vale ir com a proposta B.
> Carla: Concordo com a B, mas só se o jurídico liberar a cláusula de rescisão.
> Marcelo: Fechado então, B condicionada ao jurídico. Alguém manda pra eles?
> Carla: Eu mando hoje.
> João: E o orçamento do trimestre que vem, a gente fala quando?

Saída (trecho):

**Decisões**
1. Fornecedor: proposta B, condicionada à liberação da cláusula de rescisão pelo jurídico.

**Ações**
| # | Ação | Dono | Prazo | Origem |
|---|---|---|---|---|
| 1 | Enviar proposta B ao jurídico para análise da cláusula de rescisão | Carla | hoje | dito |
| 2 | Fechar contrato com o fornecedor | [não definido] | fim do mês | inferido |

**Pendências**
- Quando será discutido o orçamento do próximo trimestre?
