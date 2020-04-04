import React from "react";
import ProjectCard from "./ProjectCard";
import { CardDeck, Container, Row, Col } from "react-bootstrap";
import projects from "../data/projectdata.json";

export default function ProjectsPage() {
  let content = [];

  projects.map((item, index) => {
    if ((index + 1) % 4 == 0) {
      content.push(
        <Row>
          <Col xs={6} md={4}>
            <ProjectCard key={index} title={item.title} text={item.text} />
          </Col>
        </Row>
      );
    } else {
      content.push(
        <Row>
          <Col xs={6} md={4}>
            <ProjectCard key={index} title={item.title} text={item.text} />
          </Col>
        </Row>
      );
    }
  });

  return (
    <>
      <div>
        <Container>
          <h3 className="projectspage-title">Projects Page</h3>
          {/* {content} */}
          <Row>
            {projects.map((item, index) => {
              return (
                <Col className="projectcard" xs={12} md={6} lg={4} xl={4}>
                  <ProjectCard
                    key={index}
                    title={item.title}
                    text={item.text}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
