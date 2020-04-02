import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function SkillsPage() {
  return (
    <>
      <Container>
        <h3 className="skills-page-title">Skills Page</h3>
        <Row>
          <Col>
            <div className="skills-page-box">
              Languages
              <div className="skills-page-items">
                <div className="skills-page-item">
                  <p>imgIcon</p>Ruby
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>JavaScript
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>TypeScipt
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>HTML5
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>CSS
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="skills-page-box">
              Frameworks and Libraries
              <div className="skills-page-items">
                <div className="skills-page-item">
                  <p>imgIcon</p>Rails
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>React
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Angular
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Node
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Bootstrap
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="skills-page-box">
              General
              <div className="skills-page-items">
                <div className="skills-page-item">
                  <p>imgIcon</p>Git
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Github
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>PostgreSQL
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Hasura GraphQL
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>MongoDB
                </div>
                <div className="skills-page-item">
                  <p>imgIcon</p>Heroku
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
