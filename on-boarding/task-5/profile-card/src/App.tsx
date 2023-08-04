import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

const App: React.FC = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    location: 'New York',
    image: 'https://i.imgur.com/7vQD0fPs.jpg',
  };

  return (
    <div className="app">
      <h1>User Profile</h1>
      <ProfileCard
        name={user.name}
        age={user.age}
        location={user.location}
        image={user.image}
      />
    </div>
  );
};

export default App;