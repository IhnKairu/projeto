# Portfólio Fernanda Rasi Madi

![Lint CI](https://github.com/<seu-usuario>/<repo>/actions/workflows/lint.yml/badge.svg)  
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)

Projeto de portfólio web desenvolvido com HTML, CSS e JavaScript.

## Estrutura do projeto

- `src/index.html` - página principal
- `src/css/styles.css` - estilos
- `src/js/main.js` - scripts de navegação, idioma, tema e menu mobile
- `src/images/bg.JPG` - imagem de fundo
- `src/images/1764048263547.jpeg` - foto de perfil

## Recursos implementados

- Estrutura semântica: `header`, `main`, `section`, `footer`
- Navegação interna com âncoras e scroll suave
- Tema claro/escuro com persistência `localStorage`
- Switch de idioma PT/EN com persistência `localStorage`
- Menu hambúrguer para mobile  e responsividade
- Botões de link externo com `target="_blank"` e `rel="noopener noreferrer"`
- Detecção básica de modo IoT (`userAgent`) e otimizações de acesso

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/<repo>.git
   cd <repo>
   ```
2. Abra `src/index.html` no browser ou use servidor local (ex. `python3 -m http.server`).

## Lint e validação

Instale dependências dev e execute lint:

```bash
npm install
npm run lint
```

Scripts disponíveis:

- `npm run lint` - roda `htmlhint` e `stylelint`
- `npm run lint:html` - valida HTML com `htmlhint`
- `npm run lint:css` - valida CSS com `stylelint`

## Contribuição

1. Faça fork do reposítório.
2. Crie um branch: `git checkout -b feature/nome-da-feature`.
3. Faça suas mudanças e testes.
4. Commit e push:
   ```bash
   git add .
   git commit -m "Adicionar feature X"
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request no GitHub.

### Dicas úteis

- Mantenha a nomenclatura de arquivos transparente (`camelCase` ou `kebab-case`).
- Verifique `accessibility` com Lighthouse e `tabindex`.
- Para production, use `GitHub Pages`, `Netlify`, ou `Vercel`.

## Deploy no GitHub Pages

1. Verifique que o repositório foi criado no GitHub e o branch principal é `main`.
2. Envie código:
   ```bash
   git add .
   git commit -m "Deploy GitHub Pages"
   git push origin main
   ```
3. No GitHub: `Settings > Pages`.
4. Selecione `Branch: main`, `Folder: /root` e clique em `Save`.
5. Aguarde URL: `https://<seu-usuario>.github.io/<repo>/`

## Comandos adicionais

- `npm run lint` valida HTML e CSS.
- `npm install` instala dependências para lint.

---

Este README foi atualizado para documentar todo o fluxo de desenvolvimento e deploy do projeto.
