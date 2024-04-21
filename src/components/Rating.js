import React, { useState } from 'react';
import { CDBRating, CDBContainer } from 'cdbreact';
// Importer le fichier CSS pour les styles personnalisés

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  return (
    <CDBContainer>
      <CDBRating
        value={ratingValue}
        onChange={handleRatingChange}
        className="yellow-stars" // Ajouter une classe CSS pour remplir les étoiles en jaune
        iconRegular
      />
    </CDBContainer>
  );
};

export default Rating;
