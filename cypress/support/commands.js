// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    var Telefone = 11988468495
    var Texto = 'Não tenho nada a comentar'
    
    cy.get('#firstName').type('Rodrigo').should('have.be','Rodrigo')
    cy.get('#lastName').type('Augusto Casemiro').should('have.be','Augusto Casemiro')
    cy.get('#phone').type(Telefone)
    cy.get('#email').type('rodrigo_casemiro@live.com').should('have.be', 'rodrigo.casemiro@live,com')
    cy.get('#open-text-area').type(Texto, {delay: 20})
    cy.get('#product').select(1).wait(1000)
    cy.get('input[type="radio"]')
        .wait(1000)
            .each(function(){
                cy.get('input[type="radio"]').check('elogio')
            })

    cy.get('input[type="checkbox"]')
        .check('phone')
        .wait(1000)
    cy.contains('.button','Enviar')
        .click()
    cy.get('.success')
        .should('be.visible')
    //cy.get('.error').should('be.visible')
    //.clear()
});

Cypress.Commands.add('marcaTodosDesmarcaTodos', function(){
    cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
    cy.get('input[type="checkbox"]')
        .uncheck()
        .should('not.be.checked')
})
