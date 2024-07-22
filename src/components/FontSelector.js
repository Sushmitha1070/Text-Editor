import React from 'react';
import fontData from '../fontData.json';

const FontSelector = ({ selectedFont, onFontChange }) => {
  return (
    <select value={selectedFont} onChange={(e) => onFontChange(e.target.value)}>
      {Object.keys(fontData).map(font => (
        <option key={font} value={font}>{font}</option>
      ))}
    </select>
  );
};

export default FontSelector;
