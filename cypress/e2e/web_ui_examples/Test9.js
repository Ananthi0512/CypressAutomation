const examples = require('../../fixtures/example.json');
// `examples` contains the full contents of the fixture

describe('Sample Test', function () {
    examples.forEach((example) => {
        it('login test', function () {
            cy.visit(Cypress.env('url')+"angularpractice/")
            cy.get("input[name='name']:nth-child(2)").as('firstName')
            cy.get("@firstName").type(example.testName)
            cy.get('select').select(example.gender)
            cy.get("input[name='name']:nth-child(1)").should('have.value',this.data.testName)
        });
    });
});