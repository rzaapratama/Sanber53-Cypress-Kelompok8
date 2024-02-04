describe("Check UI website", () => {
  it("Check UI", () => {
    cy.visit("/");
    cy.get(".content > p").should("have.text", "This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.");
    cy.get(".panel.wrapper > .panel").should("be.visible");
    cy.get(".panel.wrapper > .panel > .header").should("be.visible");
    cy.get(".navigation > :nth-child(1)").should("be.visible");
    cy.get(".logo > img").should("be.visible");
    cy.get("#search").should("be.visible");
    cy.get(".showcart").should("be.visible");
    cy.get("p > a > img").should("be.visible");
    cy.get(".home-main > img").should("be.visible");
    cy.get(".home-pants > img").should("be.visible");
    cy.get(".home-t-shirts > .image").should("be.visible");
    cy.get(".home-t-shirts > .content").should("be.visible");
    cy.get(".home-erin > img").should("be.visible");
    cy.get(".home-performance > img").should("be.visible");
    cy.get(".home-eco > img").should("be.visible");
    cy.get(".content-heading > .title").should("have.text", "Hot Sellers");
    cy.get(".content-heading > .info").should("have.text", "Here is what`s trending on Luma right now");
    cy.get(".product-items").should("be.visible");
    cy.get(".page-footer > .content").should("be.visible");
    cy.get(".copyright > span").should("be.visible");
    cy.get(".copyright").should("be.visible");
  });
});
