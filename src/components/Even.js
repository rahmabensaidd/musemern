import React from 'react';
import Card from 'react-bootstrap/Card';
import cat1 from '../assets/images/lab.jpg'; // Importez vos images
import cat2 from '../assets/images/med.png';
import cat3 from '../assets/images/conf.jpg';
import cat4 from '../assets/images/ins.jpg';

function Even() {
  const transparentCardStyle = {
    background: 'rgba(255, 255, 255, 0.7)', // Couleur de fond transparente
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ ...transparentCardStyle, width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat1} />
        <Card.Body>
          <Card.Title>Ateliers interactifs </Card.Title>
          <Card.Text>
            Des ateliers interactifs peuvent être proposés, où les visiteurs peuvent participer à des activités pratiques liées à la santé.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ ...transparentCardStyle, width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat2} />
        <Card.Body>
          <Card.Title>Ateliers de méditation guidée</Card.Title>
          <Card.Text>
            Des séances d'initiation à la méditation peuvent être proposées, guidées par des instructeurs qualifiés.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ ...transparentCardStyle, width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat3} />
        <Card.Body>
          <Card.Title>Conférences et présentations</Card.Title>
          <Card.Text>
            Des conférences et des présentations animées par des experts en santé
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ ...transparentCardStyle, width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat4} />
        <Card.Body>
          <Card.Title>Collaboration avec d'autres institutions</Card.Title>
          <Card.Text>
            Collaborer avec d'autres musées, centres de recherche, institutions médicales et universités
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Even;
