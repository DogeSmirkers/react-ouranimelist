import { useState, useEffect } from "react";
import axios from "axios";

const GetTopAiring = () => {
    const [data, setData] = useState({
        results: [],
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
                try {
                    const res = await axios("https://ouranimelist.ninja:4000/ranking?rankingType=airing");
                    setData({ ...data, results: res.data.data });
                } catch (err) {
                    console.error(err);
                }
            };
            fetch();
        }, 1000);
        return () => clearTimeout(timeoutId);
        
    }, []);
    
    return { data, setData };
};

export default GetTopAiring;