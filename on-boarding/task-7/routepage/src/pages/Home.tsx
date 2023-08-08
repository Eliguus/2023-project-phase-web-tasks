import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {Contacts} from '../db'

interface Contact {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
      
      setContacts(Contacts);
    
  };

  const handleDeleteContact = (id: number) => {
    const newContacts = Contacts.filter((Contact:Contact)=>id!=Contact.id)
    setContacts(newContacts)
  };

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <ul className='contactList'>
        {contacts.map((contact) => (
          <li key={contact.id} className='contactItem'>
            <Link to={`/contacts/${contact.id}`} className='contactLink'>{contact.name}</Link>
            <div className='contactItem'>
            <Link to={`/edit/${contact.id}`} className='contactLink'> <button className='editButton'>Edit</button></Link>
            <button className='deleteButton' onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;