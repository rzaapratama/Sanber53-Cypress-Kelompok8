describe('template spec', () => {
  it("Successfully login", () => {
    cy.visit("/");
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get(".base").should("have.text", "Customer Login");
    cy.get("p > a > img").should("be.visible");
    cy.get("#email").type("vyrliaamnd@gmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("@Vyrlia29");
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    cy.get(":nth-child(2) > .greet > .logged-in").should("have.text", "Welcome, Amanda Vyrlia!");
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click();
    cy.get(':nth-child(7) > a').click();
    cy.get('.field-name-firstname').type("Amanda");
    cy.get('#lastname').type("Vyrlia");
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success > div').should("have.text", "You saved the account information");
  });
})