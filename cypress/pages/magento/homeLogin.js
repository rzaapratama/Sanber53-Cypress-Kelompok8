class homeLogin {
  elements = {
    titleSpan: () => cy.get(".logged-in")
  };
}

module.exports = new homeLogin();
