/// <reference types="Cypress" />

describe("My 6th test",()=>{
    it('mouseclicks',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})