import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddContact.css';

interface Contact {
  name: string;
  email: string;
}

const AddContact: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = async () => {
    try {
      const response = await fetch('http://localhost:3001/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        navigate('/')
      } else {
        console.error('Error adding contact');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Add Contact</h1>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
       
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='addButton' onClick={handleAddContact}>Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;