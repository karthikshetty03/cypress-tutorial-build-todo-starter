describe("smoke tests", () => {
  beforeEach(() => {
    cy.request("GET", "/api/todos")
      .its("body")
      .each((todo) => cy.request("DELETE", `/api/todos/${todo.id}`));
  });

  context("with no todos", () => {
    it("Saves new todos", () => {
      const items = [
        { text: "Buy Milk", expectedLength: 1 },
        { text: "Buy Eggs", expectedLength: 2 },
        { text: "Buy Bread", expectedLength: 3 },
      ];
      cy.visit("/");
      cy.server();
      cy.route("POST", "/api/todos").as("create");

      cy.wrap(items).each((item) => {
        cy.focused().type(item.text).type("{enter}");
        cy.wait("@create");
        cy.get(".todo-list li").should("have.length", item.expectedLength);
        cy.get(".new-todo").focus().clear();
      });
    });
  });

  context("With active todos", () => {
    beforeEach(() => {
      cy.fixture("todos").each((todo) => {
        const newtodo = Cypress._.merge(todo, { isComplete: false });
        cy.request("POST", "/api/todos", newtodo);
      });
      cy.visit("/");
    });

    it("Loads existing data from the database", () => {
      cy.get(".todo-list li").should("have.length", 4);
    });

    it("Deletes Todos", () => {
      cy.server();
      cy.route("DELETE", "/api/todos/*").as("delete");

      cy.get(".todo-list li")
        .each(($el) => {
          cy.wrap($el).find(".destroy").invoke("show").click();
          cy.wait("@delete");
        })
        .should("not.exist");
    });

    it("Toggles todos", () => {
      const clickAndWait = ($el) => {
        cy.wrap($el).as("item").find(".toggle").click();
        cy.wait("@update");
      };
      cy.server();
      cy.route("PUT", "/api/todos/*").as("update");

      cy.get(".todo-list li")
        .each(($el) => {
          clickAndWait($el);
          cy.get("@item").should("have.class", "completed");
        })
        .each(($el) => {
          clickAndWait($el);
          cy.get("@item").should("not.have.class", "completed");
        });
    });
  });
});
