import React from "react";
import { Card, Button, Row } from "react-bootstrap";

export default function ProjectCard(props) {
  return (
    <>
      <Card className="projectcard">
        <Card.Img style={{ width: "18rem" }} variant="top" src={props.img} />
        <Card Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">See Project</Button>
        </Card>
      </Card>
    </>
  );
}
