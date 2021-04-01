describe("Input Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it.only("accepts input", () => {
    const typedText = "Buy Milk";
    cy.get(".new-todo").type(typedText).should("have.value", typedText);
  });

  context("Form Submission", () => {
    it.only("Adds a new todo", () => {
      const itemText = "Buy Eggs";
      cy.server();
      cy.route("POST", "/api/todos", {
        id: 1,
        name: itemText,
        isComplete: false,
      });
      cy.get(".new-todo").type("Buy Eggs").type("{enter}");
      cy.get(".todo-list li").should("have.length", 1).and("contain", itemText);
    });
  });
});
