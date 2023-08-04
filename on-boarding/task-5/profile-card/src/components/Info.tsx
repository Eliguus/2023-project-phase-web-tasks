import React from 'react';
import './Info.css';

// info prop type stated
interface InfoProps {
  label: string;
  value?: string | number;
  site?: string;
}

// info tsx created

const Info: React.FC<InfoProps> = ({ label, value, site }) => {
  return (
    <div className="info">
      <span className="info-label">{label}:</span>
      <span className="info-value">{value}</span>
      // conditional statment implemented if site exits link is posted
      {site && <a href={site} className="info-value">{site}</a>}
    </div>
  );
};

export default Info;