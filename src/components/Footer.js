import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <h4>Nathaniel Morales {year}</h4>
      </div>
    </>
  );
}
