describe('JWT test', function(){
    it('tokenTest',function(){
        cy.LoginApi().then(function(){
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
    })
})
