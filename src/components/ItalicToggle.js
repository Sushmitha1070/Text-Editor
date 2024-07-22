import React from 'react';
import './ItalicToggle.css'; 

const ItalicToggle = ({ italic, onToggle, enabled }) => {
  return (
    <div
      className={`italic-toggle ${italic ? 'active' : ''} ${enabled ? 'enabled' : 'disabled'}`}
      onClick={() => enabled && onToggle(!italic)}
    >
      {italic ? 'Italic On' : 'Italic Off'}
    </div>
  );
};

export default ItalicToggle;
