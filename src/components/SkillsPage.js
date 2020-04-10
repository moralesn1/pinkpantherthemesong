import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillsCard from "./SkillsCard";
// Data
import generalData from "../data/generalData";
import languageData from "../data/languageData";
import librariesData from "../data/librariesData";

export default function SkillsPage() {
  function createSkillsPage(item, index) {
    return <SkillsCard key={index} img={item.img} name={item.name} />;
  }
  return (
    <>
      <Container>
        <h3 className="skills-page-title">Skills Page</h3>
        <Container className="skills-page-block">
          <Col>
            <Row>
              <Col lg={12} className="skills-title">
                <h5>Languages</h5>
              </Col>

              {languageData.map(createSkillsPage)}
            </Row>
          </Col>
        </Container>
        <Container className="skills-page-block">
          <Col>
            <Row>
              <Col lg={12} className="skills-title">
                <h5>Frameworks and Libraries</h5>
              </Col>
              {librariesData.map(createSkillsPage)}
            </Row>
          </Col>
        </Container>
        <Container className="skills-page-block">
          <Col>
            <Row>
              <Col lg={12} className="skills-title">
                <h5>General</h5>
              </Col>
              {generalData.map(createSkillsPage)}
            </Row>
          </Col>
        </Container>
      </Container>
    </>
  );
}
