import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    console.log("Список контактов обновлён:", contacts);
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app__title">Контакт-менеджер</h1>
      <ContactForm onAddContact={addContact} />
      {contacts.length === 0 ? (
        <p className="app__empty">Список контактов пуст</p>
      ) : (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      )}
    </div>
  );
}

export default App;


