import React from "react";
import { MovieControls } from "./MovieControls";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export const ActorsCard = ({ actor }) => {

    console.info(actor)
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={actor.profile_path} />
  <Card.Body>
    <Card.Title>Nome: {actor.name}</Card.Title>
    <Card.Text>
     Personagem: {actor.character}
    </Card.Text>

  </Card.Body>
</Card>
  );
};
