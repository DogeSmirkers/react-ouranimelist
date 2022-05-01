import React from "react";
import Anime from "./Anime";

export default function Animes({ anime }) {
  return (
    <div>
      <ul>
        <li>title: {anime.title}</li>
        <li>id: {anime.id}</li>
        <img src={'large' in anime.main_picture ? anime.main_picture.large: anime.main_picture.medium} alt={anime.title}></img>
        <li>{anime.genres[2].name}</li>
        <Anime anime={anime}/>
      </ul> 
    </div>
  );
}