describe("Dnd kit", () => {
  it("drags and drop", () => {
    cy.visit("/");

    cy.get("[data-cy=droppable]");

    cy.get("[data-cy=draggable]").mouseMoveBy(100, 200);

    cy.get("[data-cy=droppable]").should("not.exist");
  });
});
