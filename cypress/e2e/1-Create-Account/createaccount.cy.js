describe("Create an account", () => {
  it("Success create account", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".panel > .header > :nth-child(3) > a").click();
    cy.get(".base").should("be.visible");
    cy.get("p > a > img").should("be.visible");
    cy.get("#firstname").type("Reza");
    cy.get("#lastname").type("Pratama");
    cy.get("#email_address").type("putuagusmasreza.personal@gmail.com");
    cy.get("#password").type("Akubelajartesting123");
    cy.get("#password-confirmation").type("Akubelajartesting123");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  });
});
