# Blog Adriano Viana

Site pessoal com sistema de blog em Markdown.

## Como Adicionar um Novo Post

### 1. Instalar Dependências

Primeira vez:
```bash
npm install
```

### 2. Criar um Novo Post

Crie um arquivo `.md` no diretório `/posts`:

```bash
touch posts/meu-novo-post.md
```

### 3. Formato do Post

Todo post deve ter frontmatter YAML no início:

```markdown
---
title: "Título do Seu Post"
date: "2026-02-03"
excerpt: "Breve descrição do post que aparecerá na listagem"
tags: ["javascript", "tutorial", "web"]
image: "/assets/images/post-image.jpg"
level: 1
order: 1
minutes: 12
video: "ID-do-YouTube"
---

# Título do Post

Conteúdo do seu post em Markdown...

## Callout "Onde isso quebra"

> **Onde isso quebra.** Se a reunião tiver mais de uma hora, o resumo perde as decisões do final. Divida a transcrição em dois blocos.

## Seção 1

Texto aqui...
```

### 4. Gerar HTML dos Posts

Execute o build:

```bash
npm run build
```

Isso irá:
- Converter todos os arquivos `.md` em `/posts` para HTML em `/blog`
- Gerar um arquivo `posts.json` com metadados
- Aplicar o template HTML com header, footer, etc.

### 5. Desenvolvimento com Watch

Para desenvolvimento contínuo:

```bash
npm run build:watch
```

Isso monitora mudanças em `/posts` e reconstrói automaticamente.

## Estrutura de Diretórios

```
blog-pessoal/
├── posts/              # Posts em Markdown (editar aqui)
│   ├── exemplo-post.md
│   └── seu-post.md
├── blog/               # HTML gerado (não editar)
│   ├── exemplo-post.html
│   └── seu-post.html
├── assets/
│   └── images/        # Imagens dos posts
├── js/
│   └── site.js        # Prova social + trilha + menu
├── build-posts.js     # Script de build
├── posts.json         # Lista de posts (gerado)
```

## Recursos Markdown Suportados

- **Negrito** e *itálico*
- `Código inline`
- Blocos de código com syntax highlighting
- Listas ordenadas e não ordenadas
- Links e imagens
- Títulos (h1-h6)
- Citações

## Exemplo de Código

```javascript
function exemplo() {
  console.log("Hello, World!");
}
```

## Deploy

O site é hospedado no GitHub Pages. Para fazer deploy:

```bash
npm run build
git add .
git commit -m "Add new post"
git push origin master
```

## Tecnologias

- **Marked**: Conversão Markdown → HTML
- **Gray Matter**: Parse de frontmatter YAML
- **Prism.js**: Syntax highlighting
- **GitHub Pages**: Hospedagem estática

## Trilha (home)

- `level` (1–4): posição na trilha da home
  - 1: A base
  - 2: Uma tarefa real do começo ao fim
  - 3: Onde isso quebra
  - 4: Para quem quer ir além
- `order`: ordem dentro do nível
- `minutes`: tempo de leitura/vídeo (soma por nível na home)
- `video`: ID do YouTube, se o post for um vídeo (exibe player no post e marca como "vídeo" na trilha)
