import LoginPage from "../pageObjects/loginPage"
import { ACCOUNT, USERNAME } from "../support/vault"

describe('Logs in using page Object', () => {
    beforeEach(function() {
        cy.visit('https://app.timetac.com')
    })

    it('Enters the account name', () => {
        const loginObj = new LoginPage()
        loginObj.enterAccountName(ACCOUNT)
        loginObj.validateAccount()
        loginObj.changeAccount()
    })

    it('Enters the user credentials and logs in', () => {
        const loginObj = new LoginPage()
        loginObj.enterUsername(USERNAME)
    })
})