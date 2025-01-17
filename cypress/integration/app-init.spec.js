describe("App Initialization", () => {
  it("Loads todos on page load", () => {
    cy.seedAndVisit();
    cy.get(".todo-list li").should("have.length", 4);
  });

  it("Displays an error on failuer", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/todos",
      method: "GET",
      status: 500,
      response: {},
    });

    cy.visit("/");
    cy.get(".todo-list li").should("not.exist");
    cy.get(".error").should("be.visible");
  });
});
