import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <h3>{year}</h3>
    </>
  );
}
