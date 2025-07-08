# @wenderson-me/playwright-javascript-automation

Automação de testes end-to-end utilizando [Playwright](https://playwright.dev/) com JavaScript.

## Sobre o Projeto

Este repositório contém exemplos e scripts de automação de testes para aplicações web usando o Playwright. O objetivo é facilitar a criação, execução e manutenção de testes automatizados, promovendo qualidade e rapidez no desenvolvimento.

## Principais Funcionalidades

- Escrita de testes automatizados em JavaScript
- Execução de testes cross-browser (Chromium, Firefox, WebKit)
- Geração de relatórios de testes
- Suporte a execução headless/headed
- Screenshots e gravação de vídeos dos testes
- Integração com CI/CD

## Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

```bash
git clone https://github.com/wenderson-me/playwright-javascript-automation.git
cd playwright-javascript-automation
npm install
# ou
yarn install
```

### Executando os Testes

```bash
npx playwright test
# ou
yarn playwright test
```

### Gerando Relatórios

Após a execução dos testes, um relatório pode ser gerado com:

```bash
npx playwright show-report
```

## Scripts Úteis

- `test`: Executa todos os testes
- `test:headed`: Executa os testes com navegador visível
- `test:debug`: Executa testes em modo debug

## Documentação

A documentação completa do Playwright pode ser encontrada em: [https://playwright.dev/](https://playwright.dev/)

---

**Autor:** [@wenderson-me](https://github.com/wenderson-me)
