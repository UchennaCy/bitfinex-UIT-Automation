/// < reference types="Cypress"/>

describe('User Interface test automation for Bitfinex website', () => {
    it('should visit the bitfinex website', () => {
        cy.visit('https://www.bitfinex.com/')
        cy.title().should('include', 'Bitfinex')
    })

    it('should click on the ticker search icon', () => {
        cy.get('.bp3-tab-list > .landing-tickers__search > .bp3-icon > svg').click()
    })

    it('should search for Unus Sed Leo', () => {
        cy.get('.visible-desktop > .bp3-input-group > .bp3-input').type('Unus Sed Leo{enter}')
    })

    it('should click on the search result', () => {
        cy.get('.symbol-col').contains('LEO/USD').click()
    })

    it('should assert that the page url is equal to https://trading.bitfinex.com/t/LEO:USD?demo=true', () => {
        cy.url().should('eq', 'https://trading.bitfinex.com/t/LEO:USD?demo=true')
    })
})