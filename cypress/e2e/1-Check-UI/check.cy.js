describe("Visit website", () => {
  it("Should visit website", () => {
    cy.visit("/");
  });
});

describe("Check Text", () => {
  it("Should have text", () => {
    cy.get(".content > p").should("have.text", "This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.");
  });
});

describe("Check panel", () => {
  it("Should have panel", () => {
    cy.get(".panel.wrapper > .panel").should("be.visible");
    cy.get(".panel.wrapper > .panel > .header").should("be.visible");
  });
});

describe("Check navbar", () => {
  it("Should have navbar", () => {
    cy.get(".navigation > :nth-child(1)").should("be.visible");
  });
});

describe("Check logo", () => {
  it("Should have logo", () => {
    cy.get(".logo > img").should("be.visible");
  });
});

describe("Check search bar", () => {
  it("Should have search bar", () => {
    cy.get("#search").should("be.visible");
    cy.get(".showcart").should("be.visible");
  });
});

describe("Check img", () => {
  it("Should have img", () => {
    cy.get("p > a > img").should("be.visible");
  });
});
