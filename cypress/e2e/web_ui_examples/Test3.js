describe('My third test',function(){
    it('check/uncheck/static dropdown',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Checkbox selection
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static Dropdown
        cy.get('select').select('option3').should('have.value','option3')


        //Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text() === 'India'){
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')

        //Verify visible - invisible for a button
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio Button selection
        cy.get('[value="radio3"]').click()
        cy.get('[value="radio3"]').should('be.checked')
    })
})