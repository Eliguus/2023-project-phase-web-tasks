import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

const App: React.FC = () => {
  // user data
  const user = {
    name: 'John Doe',
    age: 25,
    location: 'New York',
    image: 'https://i.imgur.com/7vQD0fPs.jpg',
    site: 'www.gmail.com',
    siteName: 'Email'
  };

  // tsx returned
  return (
    <div className="app">
      <h1>User Profile</h1>
      <ProfileCard
        name={user.name}
        age={user.age}
        location={user.location}
        image={user.image}
        site={user.site}
        siteName={user.siteName}
      />
    </div>
  );
};

export default App;