describe('template spec', () => {
  it("Successfully edit", () => {
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
    cy.get('.items > :nth-child(6) > a').click();
    cy.get('#telephone').type("02112345");
    cy.get('#street_1').type("Jalan Mangga");
    cy.get('#city').type("Jakarta");
    cy.get('#region_id').select("Alaska");
    cy.get('#zip').type("10490")
    cy.get('#country').select("Indonesia");
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();


  });
})