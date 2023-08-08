import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddContact.css';
import { Contacts } from "../db";

interface Contact {
  id: number;
  name: string;
  email: string;
}


const ContactDetails: React.FC = () => {
  const { id } = useParams<{id: string;}>();
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = () => {
      const data = Contacts[Number(id)-1];
      setContact(data);
    
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h1>Contact Details</h1>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
    </div>
  );
};

export default ContactDetails;