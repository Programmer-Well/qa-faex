describe('Cenário de Teste: Login na Aplicação Válido', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    });

    it('Login correto', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    });
    
});