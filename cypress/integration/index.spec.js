/// < reference types="Cypress"/>

describe('User Interface test automation for Bitfinex website', () => {
    it('should visit the bitfinex website', () => {
        cy.visit('https://www.bitfinex.com/')
        cy.title().should('include', 'Bitfinex')
    })
})