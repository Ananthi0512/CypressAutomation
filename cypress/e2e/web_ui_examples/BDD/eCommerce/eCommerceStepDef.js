import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import ProductsPage from "../../pageObjects/ProductsPage"
import HomePage  from "../../pageObjects/HomePage"


const productsPage = new ProductsPage()
const homePage = new HomePage() 


Given ('User opens Ecommerce page',()=>{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

When ('the User adds items to Cart',function(){
    homePage.shopNavLink().click()
    this.data.products.forEach(function(product){
        cy.selectProduct(product)
    })
    productsPage.checkOutBtn().click()

})

When('validate the total prices seen in checkout',function(){
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
})

When('User selects the country',function(){
    productsPage.countryTextBox().type("India")
    // explicit timeout - targetting one section with custom timeout
    Cypress.config('defaultCommandTimeout',8000)
    productsPage.matchingCountry().click()
})

When('User checks the checkbox',function(){
    productsPage.agreeCheckBox().click({force:true})
})

When('User clicks on ProceedBtn',function(){
    productsPage.purchase().click()
})

Then('the success message should be displayed',function(){
    productsPage.alert().then(function(text){
        let msg = text.text()
        expect(msg.includes('Success')).to.be.true
    })
})

When('the User fill the form details',function(dataTable){
    name = dataTable.rawTable[1][0]
    homePage.getFirstName().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
    //homePage.shopNavLink().click()
})

Then('perform the validations',()=>{
    homePage.getTwoWayBindingbox().should('have.value',name)
    homePage.getEnrepreneur().should('be.disabled')
    homePage.getFirstName().should('have.attr','minlength',2)
})
