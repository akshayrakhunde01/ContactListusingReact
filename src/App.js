import React, { useState } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const [contacts, setContacts] = useState([]);

  // Function to add a new contact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
