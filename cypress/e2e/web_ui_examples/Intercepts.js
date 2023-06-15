describe('My First Intercept Test', function(){
    it('Intercepts',function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept(
            {
                method: 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with java",
                        "isbn": "RSU",
                        "aisle" : "2301"
                    }
                ]
            }).as('books')
            cy.get("button:contains(' Virtual Library ')").click()
            cy.wait('@books').then(({request,response})=>{
                cy.get('tr').should('have.length',response.body.length+1)
            })
            cy.get('p').should('have.text','Oops only 1 Book available')
    })
})