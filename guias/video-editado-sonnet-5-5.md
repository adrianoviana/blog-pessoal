---
title: "Como eu fiz o Claude Sonnet 5.5 editar um Reel inteiro"
date: "2026-10-30"
excerpt: "O pedido, o passo a passo e onde a edição do Claude quebrou: um vídeo bruto de 37,7 s virou um Reel de 32,9 s."
tags: ["IA", "Instagram", "Claude", "Edição de vídeo"]
palavra_chave: "EDITAR"
reel: ""
---

# Como eu fiz o Claude Sonnet 5.5 editar um Reel inteiro

O Reel mostrou um vídeo que eu gravei de uma vez e que o Claude Sonnet 5.5 editou. Aqui está o pedido, o que ele fez em cada passo e onde a edição quebrou. Quem comentou EDITAR: vai direto ao ponto.

## O pedido

Foi uma frase, enviada na conversa do Claude Code com a pasta da peça já preparada (roteiro aprovado, vídeo bruto e regras do projeto):

```text
siga com esse bruto e faça seu trabalho
```

O Claude trabalhou com um briefing que ele mesmo escreveu a partir do roteiro e das regras da pasta. Eu não digitei esse texto; ele é o que o Claude seguiu:

```text
Edite o vídeo bruto desta pasta em um Reel vertical 1080 × 1920, 30 fps, seguindo o roteiro aprovado e o plano visual dele.

Entrada: a transcrição com o tempo de cada palavra e o bruto. Não reescreva nem troque nenhuma palavra da fala aprovada.

1. Corte pausas longas, hesitações, tropeços e frases repetidas; quando uma frase foi dita mais de uma vez, mantenha a última versão completa. Corte sempre em silêncio, nunca no meio de uma palavra.
2. Queime legendas sincronizadas com o áudio real, legíveis no celular, sem tapar o rosto.
3. Monte os layouts do plano visual e o título dos dois primeiros segundos.
4. No último plano, mostre a palavra-chave grande.
5. Entregue a composição, o render e o relatório do que você cortou e por quê.

Se faltar informação, pergunte antes de inventar.
```

## Passo a passo

1. **Gravar de uma vez.** Gravei no celular, em uma tomada, com o texto do teleprompter. O arquivo saiu em 4K horizontal com barras pretas dos lados; o vídeo vertical estava no meio, e o recorte do vertical foi o primeiro trabalho.
2. **Transcrever com o tempo de cada palavra.** O Claude não assiste ao vídeo: ele lê a transcrição e o áudio medido. Usei o Whisper `large-v3` para o texto e o `faster-whisper` para os tempos de início das palavras.
3. **Medir os silêncios no áudio.** Pausa, para esse corte, é um trecho em que o volume fica abaixo de −42 dB por pelo menos 0,30 s. Cada corte fica dentro da pausa e deixa 0,09 s de silêncio de cada lado.
4. **Montar em HyperFrames** (vídeo escrito em HTML, renderizado em MP4): legendas, layouts, zoom alternado a cada corte, selos e título.
5. **Renderizar.** O render do Reel levou 2 min 40 s.

## O que eu observei

- O bruto tinha 37,7 s e o final ficou com 32,9 s: 12 cortes de pausa e 4,8 s a menos, cerca de 13%.
- A fala final tem as 90 palavras que eu gravei. A transcrição do final difere da do bruto em uma palavra ("tão" × "estão"), por variação do transcritor sobre o mesmo áudio.
- O maior silêncio que sobrou no final é de 0,26 s.
- O bruto quase não tinha pausa ou tropeço, então o corte foi pequeno. Se o teu bruto for mais sujo, o ganho é maior.
- Ajustes depois do primeiro resultado: 2 (no cartão do pedido, dentro do Reel, aparece "0 ajustes": o número correto é 2). Pedi para refazer a edição inteira (a primeira versão repetia o mesmo rosto em duas telas e o antes/depois ficava igual) e para trocar o efeito sonoro do corte, que soava como papel rasgado.

> **Onde isso quebra.** O Claude não assiste ao vídeo: enquadramento, cor e o que está na imagem ele só confere por quadros soltos, então a decisão visual continua sendo tua. O tempo de palavra do Whisper chegou a ficar 0,7 s fora do áudio; por isso cortei só dentro de silêncio medido e conferi as palavras contra o volume. Sem isso, o corte pega a fala e a legenda sai fora de ritmo. E o resultado depende do bruto: sem pausa, não há o que cortar.

## Fontes

- [Nodi Academy: editar vídeo com Claude Code e HyperFrames](https://nodi.global/en/academy/edit-video-with-claude-code-hyperframes), consultado em 2026-10-30.
- [PromptsRush: como editar vídeos com o Claude](https://promptsrush.com/blog/how-to-edit-videos-with-claude), consultado em 2026-10-30.
- Medições desta edição: `cortes.json` e `conferencia-final.json` da peça, geradas em 2026-10-30.
