import React from "react";
import Genres from "./Genres";
import Studios from "./Studios";

function convertDate (date) {
  date = new Date(date);
  date = date.toDateString();
  date = date.substring(3,16);
  return date;
}

// convert status to more readable format
function convertStatus (currStatus) {
  currStatus = currStatus.charAt(0).toUpperCase() + currStatus.slice(1);
  currStatus = currStatus.replace("_"," ");
  return currStatus;
}

export default function Anime({ anime }) {
  return (
    <li> 
      <li>status: {convertStatus(anime.status)}</li>
      <li>start date: {convertDate(anime.start_date)}</li>
      <li>end date: {convertDate(anime.end_date)}</li>
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