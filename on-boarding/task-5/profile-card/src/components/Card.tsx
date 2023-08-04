import React from 'react';
import './Card.css';

// cardProp type explicitly stated
interface CardProps {
  children: React.ReactNode;
}

// card tsx implemented
const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;