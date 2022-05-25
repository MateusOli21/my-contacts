import userEvent from '@testing-library/user-event';

import { render, within } from '@tests/lib';
import { formatPhone } from '@domains/contacts/utils';

import { ContactForm } from '.';

describe('ContactForm Component', () => {
  it('should write phone number and format', async () => {
    const { getByRole } = render(<ContactForm />);

    const inputPhone = getByRole('textbox', { name: /Telefone:/i });

    await userEvent.type(inputPhone, '11999999999');

    expect(inputPhone).toHaveValue(formatPhone('11999999999'));
  });

  it('should select a option and check if value is correct', async () => {
    const { getByRole } = render(<ContactForm />);

    const selectCategory = getByRole('combobox', { name: /Categoria:/i });

    await userEvent.selectOptions(
      selectCategory,
      within(selectCategory).getByRole('option', { name: /discord/i })
    );

    expect(selectCategory).toHaveValue('discord');
  });
});
