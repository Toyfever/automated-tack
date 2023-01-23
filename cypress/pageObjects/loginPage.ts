class LoginPage {
    elements = {
        accountInput : () =>  cy.get('[data-testid="login.account-name"]'),
        usernameInput : () => cy.get('[data-testid="login.username"]'),
        passwordInput : () => cy.get('[data-testid="login.password"]'),
        accountBtn : () => cy.get('[data-testid="login.continue"]'),
        signInBtn : () => cy.contains('Sign In'),
        changeAccount : () => cy.contains('Change Account'),
    }

    enterAccountName(accountName)
    {
        this.elements.accountInput().clear()
        this.elements.accountInput().type(accountName)
    }

    enterUsername(username)
    {
        this.elements.usernameInput().type(username)
    }

    enterPassword(password)
    {
        this.elements.passwordInput().type(password)
    }

    validateAccount() {
        this.elements.accountBtn().click()
    }

    signIn() {
        this.elements.signInBtn().click()
    }

    changeAccount() {
        this.elements.changeAccount().click()
    }
}

export default LoginPage