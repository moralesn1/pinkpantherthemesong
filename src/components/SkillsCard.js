import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function SkillsCard(props) {
  return (
    <>
      <Col>
        <h5>{props.img}</h5>
        <p>{props.name}</p>
      </Col>
    </>
  );
}
