import React from "react";

import Anime from "./Anime";

export default function Animes({ anime }) {
  return (
    <div>
      <h1>{anime.name}</h1>
      <Anime anime={anime.title} />
    </div>
  );
}