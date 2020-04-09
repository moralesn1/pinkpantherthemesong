import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillsCard from "./SkillsCard";
// Data
import generalData from "../data/generalData";
import languageData from "../data/languageData";
import librariesData from "../data/librariesData";

export default function SkillsPage() {
  console.log(
    generalData.map((item, index) => {
      return item.name;
    })
  );

  console.log(
    languageData.map((item, index) => {
      return item.name;
    })
  );

  console.log(
    librariesData.map((item, index) => {
      return item.name;
    })
  );

  function createSkillsPage(item, index) {
    return <SkillsCard key={index} img={item.img} name={item.name} />;
  }
  return (
    <>
      <Container>
        <h3 className="skills-page-title">Skills Page</h3>
        <Row>
          <Col>
            <Container className="skills-card-column">
              <h5>Languages</h5>
              {languageData.map(createSkillsPage)}
            </Container>
          </Col>
          <Col>
            <Container className="skills-card-column">
              <h5>Frameworks and Libraries</h5>
              {librariesData.map(createSkillsPage)}
            </Container>
          </Col>
          <Col>
            <Container className="skills-card-column">
              <h5>General</h5>
              {generalData.map(createSkillsPage)}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
