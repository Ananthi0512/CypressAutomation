/// <reference types="Cypress" />
import HomePage  from "./pageObjects/HomePage"
import ProductsPage from "./pageObjects/ProductsPage"

describe('Framework test',function(){

    before(()=>{
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('Framework test',function(){
        const homePage = new HomePage() // create object for the class using new keyword
        const productsPage = new ProductsPage()
        cy.visit(Cypress.env('url')+"angularpractice/")
        // cy.get("input[name='name']:nth-child(2)").as('firstName')
        // cy.get("@firstName").type(this.data.testName)
        // cy.get('select').select(this.data.gender)
        // cy.get("input[name='name']:nth-child(1)").should('have.value',this.data.testName)
        // cy.get('#inlineRadio3').should('be.disabled')
        // cy.get('@firstName').should('have.attr','minlength',2)

        homePage.getFirstName().type(this.data.testName)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayBindingbox().should('have.value',this.data.testName)
        homePage.getEnrepreneur().should('be.disabled')
        homePage.getFirstName().should('have.attr','minlength',2)
        homePage.shopNavLink().click()
        // explicit timeout - targetting one section with custom timeout
        //cy.selectProduct('Blackberry')
        
        this.data.products.forEach(function(product){
            cy.selectProduct(product)
        })
        productsPage.checkOutBtn().click()


        var sum = 0;
        productsPage.priceDetails().each(($el, index, $list)=>{
             var value = $el.text();
             var price = value.split(" ")[1]
             sum += Number(price)
        }).then(function(){
            cy.log(sum)
        })

        productsPage.finalPrice().then(function(element){
            var value = element.text()
            var price = Number(value.split(" ")[1])
            expect(sum).to.equal(price)
        })









        productsPage.finalCheckoutBtn().click()
        productsPage.countryTextBox().type("India")
        // explicit timeout - targetting one section with custom timeout
        Cypress.config('defaultCommandTimeout',8000)
        productsPage.matchingCountry().click()
        productsPage.agreeCheckBox().click({force:true})
        productsPage.purchase().click()
        //productsPage.alert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        productsPage.alert().then(function(text){
            let msg = text.text()
            expect(msg.includes('Success')).to.be.true
        })
    })
})