import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddContact.css';
import { Contacts } from '../db';

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

  const fetchContactDetails = () => {
    
      const data = Contacts[Number(id)-1];
      setName(data.name);
      setEmail(data.email);
    
  };

  const handleEditContact = () => {
    const profile = Contacts[Number(id)-1]
    profile.name=name;
    profile.email=email;
    navigate("/")
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