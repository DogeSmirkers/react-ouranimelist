import React from "react";
import { Link } from 'react-router-dom';

export default function HomeAnimes({ animes }) {
    
    let obj = animes;
    let res = [];
    for (let i in obj) {
        res.push([i, obj[i]]);
    };
    let animeList = [];
    for(let i=0; i< res.length; i++) {
        animeList[i] = res[i][1]['node'];
    };
    return (
        <>
            {animeList.map((animeList) => (
                <div className='suggestion-card' key={animeList.id}>
                    <a href={"https://myanimelist.net/anime/"+animeList.id}  target="_blank" ><img src={animeList.main_picture.medium} alt={animeList.title}/></a>
                    {animeList.title}
                </div>
            ))}
        </>
  );
}