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
                <>
                    <div>
                        <div className='suggestion-card' key={animeList.id}>
                            <a href={"https://myanimelist.net/anime/"+animeList.id}  target="_blank" ><img src={animeList.main_picture.large} alt={animeList.title} height='300px' width='auto'/></a>
                        </div>
                        <div style={{ marginBottom: '30px', textAlign: 'center' }}> 
                            {animeList.title}
                        </div>
                    </div>
                </>
            ))}
        </>
  );
}