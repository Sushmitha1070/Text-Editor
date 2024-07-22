import React from 'react';
import fontData from '../fontData.json';

const FontWeightSelector = ({ selectedFont, selectedWeight, onWeightChange }) => {
  const variants = Object.keys(fontData[selectedFont]).filter(variant => !variant.includes('italic'));
  
  return (
    <select value={selectedWeight} onChange={(e) => onWeightChange(e.target.value)}>
      {variants.map(variant => (
        <option key={variant} value={variant}>{variant}</option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
