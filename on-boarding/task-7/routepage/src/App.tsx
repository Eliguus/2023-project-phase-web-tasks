import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetails from './pages/ContactDetails';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='navbar'>
        <Link to="/" className='navbarLink'>Home</Link>
        <Link to="/add" className='navbarLink'>Add Contact</Link>
      </div>
      <div className='container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/:id" element={<ContactDetails/>} />
          <Route path="/add" element={<AddContact/>} />
          <Route path="/edit/:id" element={<EditContact/>} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;