import { ACCOUNT, PASSWORD, USERNAME } from '../support/vault'


describe('Check the login page, starts a timer and logs out', () => {
  it('Enters wrong credentials', () => {
    cy.visit('https://app.timetac.com')
    cy.get('[data-testid="login.continue"]').should('be.disabled')
    cy.get('[data-testid="login.account-name"]').type('test123')
    cy.get('[data-testid="login.continue"]').should('be.enabled').click()

    cy.get('[data-testid="error-container"]').should('contain.text', 
    'The specified company account does not exist.') 
  })

  it('Enter the right account name and log in', () => {
    cy.visit('https://app.timetac.com')
    cy.get('[data-testid="login.account-name"]').type(ACCOUNT)
    cy.get('[data-testid="login.continue"]').click()


    cy.get('[data-testid="login.username"]').type(USERNAME)
    cy.get('[data-testid="login.password"]').type(PASSWORD)
    cy.contains('Sign In').click()
  })

  it('Starts a time tracking', () => {
    cy.visit('https://app.timetac.com')

    cy.get('[data-testid="login.username"]').type(USERNAME)
    cy.get('[data-testid="login.password"]').type(PASSWORD)
    cy.contains('Sign In').click()
    cy.get('[data-testid="ltt-start-button"]').click()
    cy.wait(1000)
    cy.get('[data-testid="ltt-stop-button"]').should('be.visible')

  })

  it('Logs out the user', () => {
    cy.visit('https://app.timetac.com')
    cy.wait(2000)
    cy.get('[data-testid="ltt-stop-button"]').click()
    cy.contains('Settings').click()
    cy.contains('Log Out').click()
    cy.contains('Change Account').click()

  })
})