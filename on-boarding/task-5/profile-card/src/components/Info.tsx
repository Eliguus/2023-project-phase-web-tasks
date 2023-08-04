import React from 'react';
import './Info.css';

interface InfoProps {
  label: string;
  value: string | number;
}

const Info: React.FC<InfoProps> = ({ label, value }) => {
  return (
    <div className="info">
      <span className="info-label">{label}:</span>
      <span className="info-value">{value}</span>
    </div>
  );
};

export default Info;