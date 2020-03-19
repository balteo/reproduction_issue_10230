describe('my-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=helloworldcomponent--primary'));

  it('should render the component', () => {
    cy.get('myworkspace-helloworld').should('exist');
  });
});
