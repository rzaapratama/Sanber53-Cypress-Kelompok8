// Citra Sekar Pandita
describe('Open the Web', () => {
    it('Visits the Mogento Shop', () => {
        cy.visit('https://magento.softwaretestingboard.com')
    })
})
describe('Search for View Product Men', () => {
    it('finds the content "Men"', () => {
        cy.contains("Men").click()
        cy.url().should('include', '/men.html')
        
    })
})
describe('View Product Hero Hoodie', () => {
    it('finds the content "Hero Hoodie"', () => {
        cy.contains("Hero Hoodie").click()
        cy.url().should('include', 'hero-hoodie.html')
        cy.contains("$54.00")
        
    })
})
describe('Choose Size, Color, Quantity and Add to Cart', () => {
    it('finds the quantity size', () => {
       cy.get('#option-label-size-143-item-166').click()
       cy.get("#option-label-color-93-item-53").click()
       cy.get("#qty").type("3")
       cy.contains("Add to Cart").click()

    })
})
describe('Add to Cart', () => {
    it('Check add product success to cart', () => {
        cy.get('#minicart-wrapper').click()
        cy.contains().should('include', "Hero Hoodie")
        cy.contains().should('include', "3 Item in Cart")
        cy.contains().should('include', "$162.00")
        cy.contains().should('include', "Process to Checkout")
    })
})
describe('Number of Cart', () => {
    it('Check number of cart', () => {
        cy.get('#counter-number').contains("3")
    })
})
