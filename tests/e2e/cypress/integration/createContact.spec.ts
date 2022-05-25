describe('New contact', () => {
  it('should create a new contact', () => {
    cy.visit('/');

    cy.findByRole('button', {
      name: /novo contato/i,
    }).click();

    cy.findByRole('textbox', {
      name: /Nome:/i,
    }).type('Mateus');

    cy.findByRole('textbox', {
      name: /E-mail:/i,
    }).type('mateus@gmail.com');

    cy.findByRole('textbox', {
      name: /Telefone:/i,
    }).type('11999999999');

    cy.findByRole('combobox', { name: /Categoria:/i }).select('instagram');

    cy.findByRole('button', {
      name: /Cadastrar/i,
    }).click();

    cy.findByText(/mateus@gmail.com/i).should('be.visible');
  });
});
