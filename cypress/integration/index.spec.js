/// < reference types="Cypress"/>

const { describe } = require("mocha");

describe('User Interface test automation for Bitfinex website', () => {
    it('should visit the bitfinex website', () => {
        cy.visit('https://www.bitfinex.com/')
    })
})