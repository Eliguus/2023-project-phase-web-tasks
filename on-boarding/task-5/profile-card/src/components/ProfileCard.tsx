import React from 'react';
import Card from './Card';
import Avatar from './Avatar';
import Info from './Info';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  location,
  image,
}) => {
  return (
    <Card>
      <Avatar image={image} alt={name} />
      <div className="profile-info">
        <h2>{name}</h2>
        <Info label="Age" value={age} />
        <Info label="Location" value={location} />
      </div>
    </Card>
  );
};

export default ProfileCard;