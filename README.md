# SPARK Energy Premium — React + Vite

Site de landing page convertido de HTML puro para React com Vite e Tailwind CSS.

## Estrutura do Projeto

```
spark-energy/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Benefits.jsx
│   │   ├── Ingredients.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como fazer deploy no Vercel

### Opção 1 — Via CLI (recomendado)
```bash
npm install -g vercel
vercel
```

### Opção 2 — Via GitHub
1. Crie um repositório no GitHub e faça push deste projeto
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Vercel detecta automaticamente que é um projeto Vite
5. Clique em **Deploy** — pronto! 🚀

### Opção 3 — Drag & Drop
1. Execute `npm run build` para gerar a pasta `dist/`
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Arraste a pasta `dist/` para o Vercel

## Stack

- **React 18** — UI
- **Vite** — Build tool
- **Tailwind CSS** — Estilização
- **lucide-react** — Ícones
