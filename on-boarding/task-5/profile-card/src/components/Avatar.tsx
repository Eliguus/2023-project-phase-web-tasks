import React from 'react';
import './Avatar.css';

// type explicitly stated of avatar
interface AvatarProps {
  image: string;
  alt: string;
}

// avatar tsx component
const Avatar: React.FC<AvatarProps> = ({ image, alt }) => {
    console.log(image)
  return <img src={image} alt={alt} className="avatar" />;
};

export default Avatar;