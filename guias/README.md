# Guias dos Reels

Páginas de destino do CTA "Comente PALAVRA" dos Reels e carrosséis do @adrianov.ai (formato `curto-ig` do repositório [conteudo](https://github.com/adrianoviana/conteudo/tree/main/workflows/curto-ig)).

- `guias/<slug>.md` vira `guia/<slug>.html`, publicado em `https://www.adrianoviana.com.br/guia/<slug>.html`.
- Os guias não entram em `posts.json` nem na trilha da home: só são achados pelo link da DM, do comentário fixado ou da bio.
- Arquivos que começam com `_` (como o [modelo](_modelo.md)) e este README não são publicados.

## Novo guia

```bash
cp guias/_modelo.md guias/meu-guia.md   # ou copie o guia.md da peça no repo conteudo
npm run build
npx browser-sync start --server --port 8080 --no-open   # abra http://localhost:8080/guia/meu-guia.html
```

Frontmatter:

- `title`, `excerpt`, `tags`: como nos posts.
- `date`: `"AAAA-MM-DD"`, obrigatório.
- `palavra_chave`: a mesma do CTA, uma palavra em maiúsculas sem acento. O build falha se vier diferente disso.
- `reel`: URL do Reel; deixe vazio até a publicação e republique depois de preencher.

O guia sobe para o `master` antes do Reel ir ao ar, porque o CTA não pode apontar para página inexistente. Inclua a URL no `sitemap.xml` se quiser indexação.
