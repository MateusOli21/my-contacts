import userEvent from '@testing-library/user-event';

import { render, screen } from '@tests/lib';

import { HomePage } from '.';

describe('Home page', () => {
  it('shoud filter a contact and find related card', async () => {
    render(<HomePage />);

    const searchInput = screen.getByPlaceholderText('Pesquisar contato...');

    await userEvent.type(searchInput, 'mateus');

    // expect(screen.findByText('Mateus Oliveira de Abreu')).toBeVisible();
  });
});
