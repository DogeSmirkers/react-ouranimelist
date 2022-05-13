import { useState, useEffect } from "react";
import axios from "axios";

const GetDetails = (id) => {
  const [data, setData] = useState({
    results: []
  });

  useEffect(() => {
    if (id !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await axios.get(`http://ouranimelist.ninja:4000/anime/${id}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, []);
  
  return { data, setData };
};

export default GetDetails;