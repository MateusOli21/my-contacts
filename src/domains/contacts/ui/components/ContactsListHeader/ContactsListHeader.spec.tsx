import { render } from '@app/tests/lib';
import { ContactsListHeader } from '.';

describe('ContactsListHeader', () => {
  it('should have New Contact buttons', async () => {
    const { getByText } = render(<ContactsListHeader registeredContacts={5} />);

    expect(getByText('Novo contato')).toBeTruthy();
  });
});
