describe("Dnd kit", () => {
  it("drags and drop", () => {
    cy.visit("/");
    cy.get("[data-cy=draggable]").mouseMoveBy(200, 200);
  });
});
