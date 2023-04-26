// En el componente Card
import React from 'react';
import "./styles.css"


const Card = ({ character, onClose }) => {
  if (!character) {
    return null; // Manejo de caso donde character es undefined o null
  }

  const {name, status, species, gender, origin, image } = character;

  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>
      <button onClick={handleButtonClick}>X</button>
    </div>
  );
};

export default Card;
