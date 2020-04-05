import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Styling
import "../app.css";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/skills" exact component={SkillsPage} />
            <Route path="/portfolio" exact component={ProjectsPage} />
          </Switch>
          <NavigationBar />
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
