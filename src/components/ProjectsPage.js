import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import projectData from "../data/data.js";

export default function ProjectsPage() {
  function createCard(item, index) {
    return (
      <Col key={index} className="projectcard" xs={12} md={6} lg={4} xl={4}>
        <ProjectCard
          key={index}
          img={item.img}
          title={item.title}
          text={item.text}
        />
      </Col>
    );
  }

  return (
    <>
      <div>
        <Container>
          <h3 className="projectspage-title">Projects Page</h3>
          <Row>{projectData.map(createCard)}</Row>
        </Container>
      </div>
    </>
  );
}
