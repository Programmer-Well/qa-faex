# 🧪 Testes Automatizados com Cypress

Este repositório contém testes automatizados **End-to-End (E2E)** desenvolvidos com **Cypress** para validar funcionalidades da aplicação de exemplo **[SauceDemo](https://www.saucedemo.com)**.

Os testes cobrem cenários de **login válido**, **login inválido**, **adição de produto ao carrinho** e **finalização de compra**.

---

## 🚀 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Cypress](https://www.cypress.io/)
* JavaScript

---

## 📁 Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 │    └── saucedemo.cy.js
 ├── fixtures/
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
cypress.config.js
package.json
README.md
```

---

## ⚙️ Instalação e Configuração

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

---

## ▶️ Executando os Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### Executar os testes em modo headless

```bash
npx cypress run
```

---

## 🧩 Cenários de Teste Implementados

### ✅ Login Válido

* Acessa a aplicação
* Realiza login com usuário válido
* Valida redirecionamento para a página de inventário

```javascript
describe('Cenário de Teste: Login na Aplicação Válido', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  });

  it('Login correto', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });
});
```

---

### ❌ Login Inválido

* Realiza tentativa de login com usuário bloqueado
* Valida comportamento da aplicação

```javascript
describe('Cenário de Teste: Login na Aplicação Inválido', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  });

  it('Login incorreto', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });
});
```

---

### 🛒 Adicionar Produto ao Carrinho

* Realiza login
* Adiciona um produto ao carrinho
* Acessa o carrinho de compras

```javascript
describe('Cenário de Teste: Adicionar Produto no Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Adicionando produto no carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
  });
});
```

---

### 💳 Finalizar Compra

* Realiza login
* Adiciona produto ao carrinho
* Preenche dados do comprador
* Finaliza a compra com sucesso

```javascript
describe('Cenário de Teste: Finalizar Compra de um Produto', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  it('Finalizando a compra', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Wellington');
    cy.get('[data-test="lastName"]').type('Souza');
    cy.get('[data-test="postalCode"]').type('123456');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
  });
});
```

---

## 👤 Autor

**Wellington Souza**

---

## 📄 Licença

Este projeto é apenas para fins de estudo e prática de automação de testes com Cypress.
