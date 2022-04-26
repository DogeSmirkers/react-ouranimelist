import React from "react";

export default function Anime({ node }) {
  return (
    <ul>
      {node.map((el, i) => (
        <li key={i}>{el.name}</li>
      ))}
    </ul>
  );
}