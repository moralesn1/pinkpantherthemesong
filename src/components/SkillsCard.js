import React from "react";
import { Container } from "react-bootstrap";

export default function SkillsCard(props) {
  return (
    <>
      <Container xs={12} md={6} lg={4} xl={4}>
        <div>{props.img}</div>
        <div>{props.name}</div>
      </Container>
    </>
  );
}
