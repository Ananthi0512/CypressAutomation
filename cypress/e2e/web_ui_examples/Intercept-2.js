describe('My First Intercept Test', function(){
    it('Intercepts',function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((response)=>{
                //expect(response.statusCode).to.equal(403)
            })
        }).as('intercept')
        cy.get("button:contains(' Virtual Library ')").click()
        cy.wait('@intercept')
})
})