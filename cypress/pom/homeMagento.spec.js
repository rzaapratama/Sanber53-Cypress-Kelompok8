import homeLogin from "../pages/magento/homeLogin";
import homeMagento from "../pages/magento/homeMagento";

describe("POM Implementation", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

it("Should login to account", () => {
  homeLogin.typeUsername("putuagusmasreza.personal@gmail.com");
  homeLogin.typePassword("Akubelajartesting123");
  homeLogin.clickLogin();

  homeMagento.elements.titlespan().should("have.text", "Welcome,Reza Pratama!");
});
