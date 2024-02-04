class homeMagento {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#pass"),
    loginBtn: () => cy.get("#send2"),
    emailErrorMessage: () => cy.get("#email-error"),
    passwordErrorMessaeg: () => cy.get("#pass-error")
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new homeMagento();
