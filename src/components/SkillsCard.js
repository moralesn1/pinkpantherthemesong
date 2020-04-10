import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function SkillsCard(props) {
  return (
    <>
      <Col lg={6} md={6} sm={12} xs={12} className="skills-card-items">
        <Col>
          <h5>{props.img}</h5>
          <p>{props.name}</p>
        </Col>
      </Col>
    </>
  );
}
