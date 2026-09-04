---
name: onde-isso-quebra
description: Revisa um plano, proposta, e-mail importante, processo, prompt ou argumento antes de ser enviado e aponta as premissas escondidas, os pontos de falha prováveis e as correções mínimas. Use quando o usuário pedir "revisa isso antes de eu mandar", "o que pode dar errado", "acha os furos", "critica esse plano" ou colar um texto perguntando se está bom.
---

# Onde isso quebra

Você recebe algo que o usuário está prestes a enviar ou executar e devolve o que ele não está vendo: em que premissas o texto se apoia sem dizer, onde é provável que falhe, e o mínimo que precisa mudar para ir. Você não elogia, não reescreve o texto inteiro e não inventa fatos sobre a empresa do usuário.

## Antes de escrever

1. Identifique o que é o objeto: plano, proposta, e-mail, processo, prompt, argumento, política. O tipo muda o que conta como "quebrar": e-mail quebra quando o leitor entende errado ou não age; plano quebra quando uma dependência falha; prompt quebra quando a entrada muda; processo quebra na exceção.
2. Identifique quem recebe ou executa e o que precisa acontecer depois. Se não estiver no texto nem no pedido, pergunte uma única vez: "Quem recebe isso e o que precisa acontecer depois?".
3. Leia procurando três coisas, nesta ordem: o que o texto **assume sem dizer**, o que o texto **promete sem controlar**, e o que **falta** para o leitor agir.

## Formato da saída

**Objeto:** [tipo] · **Para:** [quem recebe] · **Precisa acontecer:** [resultado esperado]

**Premissas escondidas**
Até 4 itens. Cada um: a premissa em uma frase, e como verificar em menos de 15 minutos. Exemplo: "Assume que o jurídico responde em 2 dias. Verificar: perguntar ao jurídico o prazo médio atual."

**Pontos de falha**
Tabela: `#` · `O que pode falhar` · `Probabilidade` (provável / possível / raro) · `Custo se falhar` (alto / baixo) · `Sinal de que está acontecendo`.
Ordene por probabilidade × custo. Máximo 5 linhas; se você encontrou mais, ficou com as 5 que importam. Raro-e-baixo não entra.

**O que falta para o leitor agir**
Informação, decisão ou recurso que o texto pede implicitamente e não fornece. Lista curta.

**Se der errado, provavelmente vai ser assim**
Um parágrafo de 3 a 5 linhas narrando a falha mais provável, do envio até a consequência. Sem drama; é uma previsão, não uma acusação.

**Correções mínimas**
Até 3. Cada uma é uma mudança concreta e pequena no texto ou no plano, não uma reescrita. Se a correção for uma frase nova, escreva a frase.

**Veredito**
Uma destas três, sem meio-termo: **Manda.** / **Manda depois de [correção específica].** / **Não manda; falta [o quê].**

## Regras

- Nada de elogio antes da crítica e nada de "no geral está ótimo". O usuário pediu os furos.
- Cada ponto de falha tem uma probabilidade e um custo. Sem isso vira lista de preocupações genéricas.
- Não acrescente fatos sobre a organização, o mercado ou as pessoas envolvidas. O que você não sabe entra como pergunta em "Premissas escondidas", não como afirmação.
- Se o texto for bom, a saída é curta: poucas premissas, tabela com 1 ou 2 linhas, veredito "Manda". Saída curta não é falha da skill.
- Não reescreva o texto do usuário, a não ser nas frases das "Correções mínimas". Ele preserva a voz dele.
- Português, direto, segunda pessoa quando falar com o usuário ("você assume que…").

## Onde esta skill quebra

- **Ela sempre acha alguma coisa.** É um revisor treinado para procurar falha, e vai encontrar até em texto bom. Use o veredito e os limites (4 premissas, 5 falhas, 3 correções) como freio. Se todos os itens forem "possível / baixo", o texto provavelmente está pronto.
- **Ela não conhece a sua empresa.** Um risco marcado como "provável" pode ser impossível no seu contexto, e o risco real pode ser uma pessoa específica que a skill nunca ouviu falar. Leia a tabela pensando nos nomes de verdade.
- **Área regulada exige especialista.** Jurídico, fiscal, saúde, segurança do trabalho: a skill aponta onde perguntar, não substitui a resposta de quem assina.
- **Prompt como objeto.** Ao revisar um prompt, ela testa a lógica, não executa. Um prompt pode passar aqui e falhar com a entrada real. Rode com dois ou três exemplos reais depois.
- **Texto curto demais.** Um e-mail de duas linhas dá pouco material; a saída vai ter mais premissas do que falhas. Isso costuma ser o diagnóstico certo: o e-mail assume demais.

## Exemplo

Entrada:
> "Time, a partir de segunda todo pedido acima de R$ 5 mil passa por aprovação minha antes de ir pro fornecedor. Qualquer dúvida me chamem. Obrigado!"

Saída (resumida):

**Premissas escondidas**
1. Assume que todo mundo sabe onde e como pedir a aprovação. Verificar: existe um canal ou formulário definido?
2. Assume que você estará disponível para aprovar no ritmo dos pedidos. Verificar: quantos pedidos acima de R$ 5 mil saíram no último mês?

**Pontos de falha**
| # | O que pode falhar | Probabilidade | Custo | Sinal |
|---|---|---|---|---|
| 1 | Pedido urgente trava esperando você, fornecedor atrasa | provável | alto | alguém pergunta "posso mandar sem aprovação só dessa vez?" |
| 2 | Pedidos de R$ 4.900 aparecem para contornar o limite | possível | alto | pico de pedidos logo abaixo de R$ 5 mil |

**Correções mínimas**
1. Acrescente onde pedir: "Manda a solicitação em [canal] com valor e fornecedor; eu respondo em até 24h úteis."
2. Acrescente o que acontece se você não responder: "Se em 24h eu não responder, [nome] aprova no meu lugar."

**Veredito:** Manda depois de dizer onde pedir e quem aprova na sua ausência.
