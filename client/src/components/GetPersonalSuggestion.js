import { useState, useEffect } from "react";
import axios from "axios";

const GetPersonalSuggestion = () => {
    const [data, setData] = useState({
        results: [],
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
                try {
                    const res = await axios("http://ouranimelist.ninja:4000/anime/46102");
                    setData({ ...data, results: res.data });
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

export default GetPersonalSuggestion;