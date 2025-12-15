import React, { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    const newContact = {
      id: Date.now(),
      name,
      phone,
      email,
    };

    onAddContact(newContact);

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="form__input"
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="form__input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="form__button" type="submit">
        Добавить
      </button>
    </form>
  );
}

export default ContactForm;
