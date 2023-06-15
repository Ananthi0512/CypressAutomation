class ProductsPage{
    checkOutBtn(){
        return cy.get('a:contains("Checkout")')
    }

    finalCheckoutBtn(){
        return cy.get("button:contains('Checkout')")
    }

    countryTextBox(){
        return cy.get("#country")
    }
    agreeCheckBox(){
        return cy.get("#checkbox2")
    }

    purchase(){
        return cy.get("[value='Purchase']")
    }

    alert(){
        return cy.get(".alert")
    }

    matchingCountry(){
        return cy.get('.suggestions>ul>li>a')
    }

    priceDetails(){
        return cy.get("tr td:nth-child(4) strong")
    }
    finalPrice(){
        return cy.get("h3 strong")
    }
}

export default ProductsPage