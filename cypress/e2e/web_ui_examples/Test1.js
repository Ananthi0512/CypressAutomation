describe('My Firt Test', function(){
    it('Test1',function(){
        expect(true).to.equal(true);
    })

    it('Test2',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Test3',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
    })
    it('Verify length of matching entries to:ca ', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            let text = $el.find('.product-name').text()
            if(text.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').then(function(ltext){
            cy.log(ltext.text())
        })

        //Assert to see if header contains 'GREENKART'
        cy.get('.brand').should('have.text','GREENKART')
    })
})