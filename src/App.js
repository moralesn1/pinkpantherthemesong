import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/skills" exact component={SkillsPage} />
          <Route path="/portfolio" exact component={ProjectsPage} />
        </Switch>
        <NavigationBar />

        <Footer />
      </Router>
    </>
  );
}

export default App;
