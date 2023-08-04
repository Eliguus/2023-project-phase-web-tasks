import React from 'react';
import Card from './Card';
import Avatar from './Avatar';
import Info from './Info';
import './ProfileCard.css';

//profile card type implemented
interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  image: string;
  site?:string;
  siteName?:string;

}

//profile card tsx written

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  location,
  image,
  site,
  siteName
}) => {
  return (
    <Card>
        // avatar component used
      <Avatar image={image} alt={name} />
      <div className="profile-info">
        <h2>{name}</h2>
        <Info label="Age" value={age} />
        <Info label="Location" value={location} />
        //conditional statment written cecking existance of site, and siteName
        {site&&siteName&&
        <Info label={siteName} site={site}/>
        }
      </div>
    </Card>
  );
};

export default ProfileCard;