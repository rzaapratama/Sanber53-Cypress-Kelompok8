describe("Wrong Email Format Login", () => {
  it("Failed login with wrong email format", () => {
    cy.visit("/");
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type("putuagusmasreza.personalgmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Akubelajartesting123");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2").click();
  });
});

describe("Invalid Password Login", () => {
  it("Failed login with invalid password", () => {
    cy.visit("/");
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type("putuagusmasreza.personal@gmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Akubelajartesting");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2").click();
    cy.get(".message-error").should("be.visible");
  });
});
