import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:3001/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDeleteContact = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/contacts/${id}`, {
        method: 'DELETE',
      });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <ul className='contactList'>
        {contacts.map((contact) => (
          <li key={contact.id} className='contactItem'>
            <Link to={`/contacts/${contact.id}`} className='contactLink'>{contact.name}</Link>
            <button className='deleteButton' onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;