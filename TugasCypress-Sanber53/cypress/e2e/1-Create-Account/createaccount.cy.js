/// <reference types="Cypress" />

describe("Create an account", () => {
  it("Success create account", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".panel > .header > :nth-child(3) > a").click();
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  });
});
