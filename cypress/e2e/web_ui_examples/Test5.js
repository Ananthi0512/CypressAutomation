/// <reference types="Cypress" />


describe('My fifith test',()=>{
    it('web tables',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2').each(($el,index,$list)=>{
            let text = $el.text();
            if(text.includes("Python Language")){
                cy.get('tr td:nth-child(2)').eq(index).next(function(price){
                    let totalPrice = price.text()
                    expect(totalPrice).to.equal(25)
                })
            }
        })
    })
})