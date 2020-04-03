import React from "react";
import ProjectCard from "./ProjectCard";
import { CardDeck, Container, Row } from "react-bootstrap";
import projects from "./projectdata.json";

export default function ProjectsPage() {
  let content = [];
  projects.map((item, index) => {
    if (index % 4 == 0) {
      content.push(
        <Row>
          <ProjectCard key={index} title={item.title} text={item.text} />
        </Row>
      );
    } else {
      content.push(
        <ProjectCard key={index} title={item.title} text={item.text} />
      );
    }
  });
  return (
    <>
      <div>
        <h3>Projects Page</h3>
        <Container>
          <CardDeck>
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                />
              );
            })}
          </CardDeck>
        </Container>
      </div>
    </>
  );
}
