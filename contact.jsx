import React from 'react';

function Contact({ contact }) {
  return (
    <div className="contact">
      <p><strong>Имя:</strong> {contact.name}</p>
      <p><strong>Телефон:</strong> {contact.phone}</p>
    </div>
  );
}

export default Contact;
