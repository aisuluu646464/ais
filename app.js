import React, { useState } from 'react';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    newContact.id = Date.now().toString();
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Контактная книга</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
