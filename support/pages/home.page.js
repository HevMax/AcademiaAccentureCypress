const MNAV_MOTO = '#nav_motorcycle'


Cypress.Commands.add('acessarMotorcycle', () => {
    cy.get(MNAV_MOTO).click()
})
