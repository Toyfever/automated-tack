import { ACCOUNT } from '../support/vault'


describe('Check the login page', () => {
  it('Enters wrong credentials', () => {


    cy.visit('https://app.timetac.com')
    cy.get('[data-testid="login.change-account"]').click()
    cy.get('[data-testid="login.continue"]').should('be.disabled')
    cy.get('[data-testid="login.account-name"]').type('test123')

    cy.get('[data-testid="login.account-name"]').should('have.value', 'test123')

    cy.get('[data-testid="login.continue"]').should('be.enabled').click()

    cy.get('[data-testid="error-container"]').should('contain.text', 
    'The specified company account does not exist.')

    //clear up the case 
    cy.clearCookies()
    
  })

  it('Enter the right account name', () => {
    cy.visit('https://app.timetac.com')
    cy.get('[data-testid="login.account-name"]').type(ACCOUNT)
    cy.get('[data-testid="login.continue"]').click()

    cy.contains('Username')
    cy.contains('Password')

  })
})