import React from "react";
import Genres from "./Genres";
import Studios from "./Studios";
import Tools from "./Tools";

export default function Anime({ anime }) {
  return (
    <li> 
      <li>status: {Tools.convertStatus(anime.status)}</li>
      <li>start date: {Tools.convertDate(anime.start_date)}</li>
      <li>end date: {Tools.convertDate(anime.end_date)}</li>
      <li>Genres </li>
      <ul>
          <Genres genres={anime.genres} />
      </ul>
      Studios 
      <ul>
          <Studios studios={anime.studios} />
      </ul>
    </li>
  );
}