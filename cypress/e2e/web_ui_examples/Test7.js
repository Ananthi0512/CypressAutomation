/// <reference types="Cypress" />

describe("My 7th test",()=>{
    it('window',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(el){
            let url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get('.nav-item a[href*="about"]').click()
                cy.url().should('include','about')
            })
        })
    })
})