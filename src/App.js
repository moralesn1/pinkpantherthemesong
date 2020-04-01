import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <NavigationBar />
      <SkillsPage />
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default App;
