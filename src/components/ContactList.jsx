import React from "react";
import ContactItem from "./ContactItem";
import "../styles/ContactList.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
