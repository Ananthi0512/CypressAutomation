class HomePage{

    getFirstName(){
        return cy.get("input[name='name']:nth-child(2)")
    }

    getGender(){
        return cy.get('select')
    }

    getEnrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getTwoWayBindingbox(){
        return cy.get("input[name='name']:nth-child(1)")
    }

    shopNavLink(){
        return cy.get(".nav-link:contains('Shop')")
    }
}


export default HomePage
//class available to all other files in your Framework