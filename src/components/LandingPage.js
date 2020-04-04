import React from "react";
import { Container } from "react-bootstrap";

export default function LandingPage() {
  const currentTime = new Date().getHours();

  let greeting;

  if (currentTime < 12) {
    greeting = "Good morning, ";
  } else if (currentTime > 12 && currentTime < 18) {
    greeting = "Good afternoon, ";
  } else {
    greeting = "Good evening, ";
  }

  return (
    <>
      <Container>
        <div className="landingpage">
          <div className="landingpage-img">IMG</div>
          <div className="landingpage-info">
            <p>{greeting} I'm Nathaniel. It's nice to meet you!</p>
            <p>I'm a Full Stack Developer based in Sydney, Australia.</p>
            <p>
              I love developing and designing web applications and watching them
              come to life.
            </p>
            <p>
              If I'm not working you can usually find me at the gym, exploring
              Azeroth or Tamriel.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
