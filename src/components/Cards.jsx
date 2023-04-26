import React from 'react';
import Card from './Card';
import "./styles.css"

const Cards = ({ characters, onClose }) => {
  return (
    <div className='Cards'>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
};

export default Cards;

