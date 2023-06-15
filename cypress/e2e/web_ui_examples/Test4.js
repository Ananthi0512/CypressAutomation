/// <reference types="Cypress" />

describe('My fourth test',()=>{
    it('Alerts/tab/switch window',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


        cy.get('#opentab').invoke('removeAttr','target')
        cy.get('#opentab').click()
        // cy.url().should('include','qa')
        // cy.go('back')

        cy.url().should((url) => {
            expect(url).to.equal('qa')
          })
    })
})
