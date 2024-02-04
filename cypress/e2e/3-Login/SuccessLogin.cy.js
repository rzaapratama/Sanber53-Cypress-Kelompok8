describe("Login Function", () => {
  it("Successfully login", () => {
    cy.visit("/");
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get(".base").should("have.text", "Customer Login");
    cy.get("p > a > img").should("be.visible");
    cy.get("#email").type("putuagusmasreza.personal@gmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Akubelajartesting123");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2").click();
    cy.get(":nth-child(2) > .greet > .logged-in").should("have.text", "Welcome, Reza Pratama!");
  });
});
