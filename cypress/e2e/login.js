import LoginPage from './login.page.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
	LoginPage.visit();
	// cy.visit('http://zero.webappsecurity.com/index.html');
	// cy.get('a').should('contain.text', 'Zero Bank')
}),

When('I submit Login', () => {
	LoginPage.fillUsername('username');
	LoginPage.fillPassword('password');
	LoginPage.signIn();

	// click tombol Signin dan validasi halaman
	// cy.wait(2000)
	// cy.get('#signin_button').click()
	// cy.get('h3').should('contain.text', 'Log in to ZeroBank')

	// // input username, password dan click tombol sign in
	// cy.get('#user_login').clear()
	// cy.get('#user_login').type('username')
	// cy.get('#user_password').clear()
	// cy.get('#user_password').type('password')
	// cy.get('#user_remember_me').check()
	// cy.get('input[name="submit"]').click()
}),

Then('I should see homepage', () => {
	cy.get('a.brand').should('contain.text', 'Zero Bank')
})


// Given('I enter the word online', () => {
// 	cy.get('#searchTerm').type('online {enter}')
// }),

// When('I click enter', () => {
// 	cy.get('#searchTerm').type('some text {enter}')
// }),

// Then('I should see homepage', () => {
// 	cy.get('h2').should('contain.text', 'Search Results:')
// })