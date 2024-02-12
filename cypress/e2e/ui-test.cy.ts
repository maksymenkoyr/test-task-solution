describe('Main', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('input change should update count', () => {
    cy.get('.current_count').should('exist').should('have.text', '0');
    cy.get('input[name="start_at"]').should('exist').clear().type('5')
    cy.get('input[name="step"]').should('exist').clear().type('5')
    cy.get('.current_count').should('exist').should('have.text', '5');
    cy.get('.current_count').click().should('have.text', '10')
  })
  it('count work properly', () => {
    cy.get('.current_count').should('exist').should('have.text', '0');
    cy.get('input[name="start_at"]').should('exist').clear().type('0')
    cy.get('input[name="step"]').should('exist').clear().type('3')
    cy.get('.current_count').should('exist').click().should('have.text', '3').click().should('have.text', '6')
  })
  it('if value is not valid then aria-invalid is true', () => {
    cy.get('input[name="start_at"]').should('exist').clear().type('-1').should('have.attr','aria-invalid')
    cy.get('input[name="step"]').should('exist').clear().type('-1').should('have.attr', 'aria-invalid')
  })
})