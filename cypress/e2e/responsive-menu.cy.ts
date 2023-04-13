describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Displays two menu items along home button => three items", () => {
        cy.get('.menu-list-item-container').should('have.length', 3);
    });

    it("Show children when hovering", () => {
        cy.get('[data-test="list-item:we-conect"').within(() => {
            cy.get('.menu-list-item').first().trigger('mouseover')
            cy.get('.menu-list-item.subitem')
                .should('exist')
                .should('have.length', 2);
        });
    });
});