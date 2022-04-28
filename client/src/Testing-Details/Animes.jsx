import React from "react";

export default function Animes({ anime }) {
  return (
    <div>
      <ul>
        <li>{anime.title}</li>
        <li>{anime.id}</li>
        <li>{anime.main_picture}</li>
        <li>{anime.main_picture.medium}</li>
        <li>{anime.genres}</li>
        <li>{anime.pictures}</li>
      </ul> 
    </div>
  );
}