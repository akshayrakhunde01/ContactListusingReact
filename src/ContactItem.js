import React from 'react';

function ContactItem({ contact }) {
  return (
    <li>
      <strong>Name:</strong> {contact.name}<br />
      <strong>Phone:</strong> {contact.phone}<br />
      <strong>Email:</strong> {contact.email}<br />
    </li>
  );
}

export default ContactItem;
