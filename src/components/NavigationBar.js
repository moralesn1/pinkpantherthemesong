import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div className="navigation-links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>

        <button Link to="/social">
          Social Media
        </button>
      </div>
    </>
  );
}
