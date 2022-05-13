import { useState, useEffect } from "react";
import axios from "axios";

const GetRandom = () => {
    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        // query must be at least 3 letters
        return alphabet[Math.floor(Math.random() * alphabet.length)] 
    }
    
    function getRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNum = getRandomNum(2)
    let query = generateRandomLetter() + generateRandomLetter() + generateRandomLetter()

    const [data, setData] = useState({
        results: [],
    });
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
                try {
                    const res = await axios(`https://ouranimelist.ninja:4000/search?${query}`);
                    console.log(res.data.data[randomNum].node)
                    setData({ ...data, results: res.data.data[randomNum].node });
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

export default GetRandom;