describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=middlelayoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('orca-middle-layout').should('exist');
  });
});
