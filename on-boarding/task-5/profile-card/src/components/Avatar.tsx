import React from 'react';
import './Avatar.css';

interface AvatarProps {
  image: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, alt }) => {
    console.log(image)
  return <img src={image} alt={alt} className="avatar" />;
};

export default Avatar;