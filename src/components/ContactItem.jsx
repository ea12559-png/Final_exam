import React from "react";
import "../styles/ContactItem.css";

function ContactItem({ contact, onDeleteContact }) {
  return (
    <li className="item">
      <div className="item__info">
        <p className="item__name"> Имя: {contact.name}</p>
        <p className="item__phone">Номер: {contact.phone}</p>
        <p className="item__email">Почта: {contact.email}</p>
      </div>
      <button
        className="item__delete"
        onClick={() => onDeleteContact(contact.id)}
      >
        Удалить
      </button>
    </li>
  );
}

export default ContactItem;
