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
---

# Título do Post

Conteúdo do seu post em Markdown...

## Seção 1

Texto aqui...

## Seção 2

Mais conteúdo...
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
│   └── blog.js        # Script para carregar posts
├── build-posts.js     # Script de build
├── posts.json         # Lista de posts (gerado)
└── blog.html          # Página de listagem
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
