describe('Cenário de Teste: Login na Aplicação Inválido', () => { 

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it('Login incorreto', () => {
        cy.get('[data-test="username"]').type("locked_out_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

    });
})