describe('My First API Test', function(){
    it('Api',function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name": "test",
            "isbn" :"sdfsaf",
            "aisle": "28ds",
            "author" :"ananthi"
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
    })
})
})