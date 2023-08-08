import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddContact.css';

interface Contact {
  id: number;
  name: string;
  email: string;
}


const EditContact: React.FC = () => {
  const { id } = useParams<{id: string;}>();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/contacts/${id}`);
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  };

  const handleEditContact = async () => {
    try {
      const response = await fetch(`http://localhost:3001/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        navigate('/')
      } else {
        console.error('Error editing contact');
      }
    } catch (error) {
      console.error('Error editing contact:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Edit Contact</h1>
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
        <button className='addButton' onClick={handleEditContact}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;