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

        <Row className="skills-page-row">
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="skills-container"
          >
            <h5 className="skills-title">Languages</h5>

            {languageData.map(createSkillsPage)}
          </Col>

          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="skills-container"
          >
            <h5 className="skills-title">Frameworks and Libraries</h5>

            {librariesData.map(createSkillsPage)}
          </Col>

          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="skills-container"
          >
            <h5 className="skills-title">General</h5>

            {generalData.map(createSkillsPage)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
