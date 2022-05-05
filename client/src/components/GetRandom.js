import { useState, useEffect } from "react";
import axios from "axios";

const GetRandom = () => {
    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const vowel = "aeiou"
        return alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    
    function getRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNum = getRandomNum(9)
    let letter = generateRandomLetter()

    const [data, setData] = useState({
        results: [],
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
                try {
                    const res = await axios(`http://localhost:4000/search/${letter}`);
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