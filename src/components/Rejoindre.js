import React from 'react';
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { Button } from 'react-bootstrap'; // Vous pouvez utiliser un autre composant de bouton si vous n'utilisez pas Bootstrap

function Rejoindre() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href="https://www.facebook.com/" style={{ margin: '0 10px' }}>
        <FaFacebook size={30} />
      </a>
      <a href="https://www.youtube.com/" style={{ margin: '0 10px' }}>
        <FaYoutube size={30} />
      </a>
      <a href="https://www.tiktok.com/" style={{ margin: '0 10px' }}>
        <FaTiktok size={30} />
      </a>
      <a href="https://www.instagram.com/" style={{ margin: '0 10px' }}>
        <FaInstagram size={30} />
      </a>
      <Button variant="outline-primary" style={{ margin: '0 350px',width:'300px' }}>Savoir Plus</Button>
    </div>
  );
}

export default Rejoindre;
