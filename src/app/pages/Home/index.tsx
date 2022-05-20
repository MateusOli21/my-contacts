import React, { useEffect, useState } from 'react';

import { Input } from '@ui/elements/forms/Input';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { ContactCard, ContactsListHeader } from '@domains/contacts/ui/components';
import { contactsApi } from '@domains/contacts/infra/services';
import { showToast } from '@domains/contacts/utils';
import { IContact } from '@domains/contacts/types';

export const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [searchedContacts, setSearchedContacts] = useState<IContact[]>([]);

  const handleUpdatedContactsAfterDelete = (deletedAccountId: string) => {
    const filteredContacts = contacts?.filter(contact => contact.id !== deletedAccountId);

    setContacts(filteredContacts);
  };

  const handleFilterContacts = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value?.length < 2 && searchedContacts.length !== contacts.length) {
      setSearchedContacts(contacts);
      return;
    }

    if (event.target.value?.length < 2) return;

    const filteredContacts = contacts?.filter(item =>
      item.name?.toLowerCase().includes(event.target.value?.toLowerCase())
    );

    if (filteredContacts) {
      setSearchedContacts(filteredContacts);
    }
  };

  const handleListContacts = async () => {
    try {
      const response = await contactsApi.getContacts();

      setContacts(response.data?.contacts);
      setSearchedContacts(response.data?.contacts);
    } catch (err) {
      showToast('Ocorreu um erro ao tentar buscar sua lista de contatos', 'error');
    }
  };

  useEffect(() => {
    handleListContacts();
  }, []);

  return (
    <BaseLayout>
      <Input placeholder="Pesquisar contato..." onChange={handleFilterContacts} />

      <ContactsListHeader registeredContacts={contacts?.length} />

      <div className="w-full flex flex-col gap-2">
        {contacts?.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            handleUpdatedContactsAfterDelete={handleUpdatedContactsAfterDelete}
          />
        ))}
      </div>
    </BaseLayout>
  );
};
