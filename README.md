# TaquaBurguer's — Webpack Project

## Visão geral

Este projeto é uma **single-page application (SPA)** simples de um site de restaurante, construída inteiramente com **JavaScript modular**, empacotada com **Webpack** e implantada no **GitHub Pages**.

A ideia central não é apenas o visual, mas demonstrar:

* organização de código em módulos
* manipulação dinâmica do DOM (sem HTML estático de conteúdo)
* uso prático do Webpack para desenvolvimento e build
* fluxo real de deploy para GitHub Pages

Todo o conteúdo das páginas (Home, Menu, Contato etc.) é criado **exclusivamente via JavaScript**, simulando o comportamento de abas, sem recarregar a página.

---

## Tecnologias utilizadas

* JavaScript (ES6+)
* Webpack
* HTML5
* CSS3
* Git & GitHub Pages

---

## Estrutura do projeto

```
project-root/
│
├── src/
│   ├── index.js            # Ponto de entrada da aplicação
│   ├── template.html        # Estrutura base do HTML
    ├── assets                  #imagens      
│   ├── modulos/              # Módulos de cada aba
│   │   ├── botaoTopo.js
│   │   ├── carregarContato.js
│   │   └── carregarInicio.js
|   |   └── carregarMenu.js
│   └── styles/             # Estilos da aplicação
│       └── style.css
|        └── cardapio.css
|        └── contato.css
|        └── footer.css
|        └── inicio.css
|        └── menu.css
│
├── dist/                   # Build final gerado pelo Webpack
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

---

## Conceitos aplicados

### Webpack como bundler

O Webpack é responsável por:

* empacotar todos os módulos JavaScript
* processar o HTML base
* gerar a pasta `dist/` pronta para produção

Somente loaders e plugins necessários foram instalados, seguindo o princípio de **configuração mínima funcional**.

### Manipulação dinâmica do DOM

O arquivo `template.html` contém apenas a estrutura básica da página:

* `<header>` com navegação
* `<div id="content"></div>` vazio

Todo o conteúdo visível da aplicação é criado dinamicamente via JavaScript, garantindo:

* separação clara de responsabilidades
* reaproveitamento de código
* fácil expansão para novas abas

### Arquitetura modular

Cada aba do site é isolada em seu próprio módulo.

Cada módulo:

* exporta uma função
* cria um elemento `div`
* adiciona conteúdo e estilos
* anexa o elemento ao `#content`

Isso mantém o código legível, testável e fácil de manter.

---

## Como rodar o projeto localmente

### 1. Clonar o repositório

```
git clone <url-do-repositorio>
cd nome-do-projeto
```

### 2. Instalar dependências

```
npm install
```

### 3. Rodar o servidor de desenvolvimento

```
npx webpack serve
```

A aplicação ficará disponível em:

```
http://localhost:8080
```

---

## Fluxo de desenvolvimento

1. Criar o `package.json`
2. Configurar o Webpack
3. Criar o `template.html` com estrutura mínima
4. Criar o conteúdo inicial via JavaScript
5. Modularizar as páginas (abas)
6. Implementar lógica de troca de abas no `index.js`
7. Gerar build de produção
8. Realizar deploy no GitHub Pages

---

## Deploy no GitHub Pages

O GitHub Pages exige que o `index.html` esteja na raiz do branch publicado. Como o Webpack gera tudo dentro da pasta `dist/`, utilizamos uma branch separada (`gh-pages`) contendo apenas o build final.

### Criar a branch de deploy (apenas uma vez)

```
git branch gh-pages
```

### Passos para deploy ou redeploy

1. Garantir que todas as alterações estão commitadas

```
git status
git commit -am "Descrição das alterações"
```

2. Mudar para a branch de deploy e sincronizar com a main

```
git checkout gh-pages
git merge main --no-edit
```

3. Gerar o build de produção

```
npx webpack
```

4. Commitar a pasta `dist` forçando inclusão

```
git add dist -f
git commit -m "Deployment commit"
```

5. Enviar apenas o conteúdo da pasta `dist` para a branch `gh-pages`

```
git subtree push --prefix dist origin gh-pages
```

6. Voltar para a branch principal

```
git checkout main
```

### Configuração no GitHub

No repositório:

* Acesse **Settings > Pages**
* Defina a source branch como `gh-pages`
* Salve as alterações

Após isso, o site estará disponível via GitHub Pages.

---

## Observações importantes

* A pasta `dist/` e `node_modules/` estão listadas no `.gitignore`
* O conteúdo da `dist/` só é versionado durante o deploy
* O projeto não utiliza frameworks (React, Vue, etc.) propositalmente
* O foco está em JavaScript puro, arquitetura e tooling

---

## Possíveis melhorias futuras

* Adicionar animações na troca de abas
* Implementar roteamento via History API
* Tornar o projeto totalmente responsivo
* Adicionar testes básicos

---

## Autor

Desenvolvido por **Gabriel Mateus Zenerato**

Projeto criado com foco em aprendizado, organização de código e boas práticas de desenvolvimento front-end.
