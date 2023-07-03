import SearchPage from './search.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
// const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('I open browser', () => {
	SearchPage.visit()
	// cy.visit('http://zero.webappsecurity.com/index.html');
	// cy.get('a').should('contain.text', 'Zero Bank')
	// cy.get('#searchTerm').type('bank {enter}')
}),

When('I search bank and click enter', () => {
	SearchPage.fillSearch('bank{enter}')
	// cy.get('#searchTerm').type('bank{enter}')
	// cy.wait(2000)
}),

Then('I should see data', () => {
	cy.get('h2').should('contain.text', 'Search Results:')
})