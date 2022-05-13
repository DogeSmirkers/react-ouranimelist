import { useState, useEffect } from "react";
import axios from 'axios';

const GetSearch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await axios(`http://ouranimelist.ninja:4000/search?${data.slug}`);
            console.log(res.data.data);
            setData({ ...data, results: res.data.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return { data, setData };
};

export default GetSearch;