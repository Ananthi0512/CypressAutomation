describe('My Firt Test',function(){
    it('e2e test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            let text = $el.find('.product-name').text()
            if(text.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.get('button:contains("PROCEED TO CHECKOUT")').click()
        cy.contains('Place Order').click()
    })
})