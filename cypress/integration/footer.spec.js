describe("Footer", () => {
  context("with a single todo", () => {
    it("displays a singular todo in cuunt", () => {
      cy.seedAndVisit([{ id: 1, name: "Buy Milk", isCOmplete: false }]);
      cy.get(".todo-count").should("contain", "1 todo left");
    });
  });

  context("with multiple todos", () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it("displays multiple todos", () => {
      cy.get(".todo-count").should("contain", "todos left");
    });

    it.only("Handles filter links", () => {
      const filters = [
        { link: "Active", expectedLength: 3 },
        { link: "Completed", expectedLength: 1 },
        { link: "All", expectedLength: 1 },
      ];

      cy.wrap(filters).each((filter) => {
        cy.contains(filter.link).click();
        cy.get(".todo-list li").should("have.length", filter.expectedLength);
      });
    });
  });
});
