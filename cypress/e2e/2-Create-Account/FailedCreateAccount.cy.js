describe("Create an Account", () => {
  it("Failed create an account", () => {
    cy.visit("/");
    cy.get(".panel > .header > :nth-child(3) > a").click();
    cy.get(".base").should("be.visible");
    cy.get("p > a > img").should("be.visible");
    cy.get("#firstname").type("Cristiano");
    cy.get("#lastname").type("Ronaldowati");
    cy.get("#email_address").type("ronaldowati.gmail.com");
    cy.get("#password").type("Akubelajartesting123");
    cy.get("#password-confirmation").type("Akubelajartesting", { force: true });
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
    cy.get("#email_address-error").should("have.text", "Please enter a valid email address (Ex: johndoe@domain.com).");
    cy.get("#password-confirmation-error").should("have.text", "Please enter the same value again.");
  });
});
