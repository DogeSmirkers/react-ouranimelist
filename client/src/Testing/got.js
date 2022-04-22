import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:4000/anime",
  baseURL: "https://game-of-thrones-quotes.herokuapp.com/v1/house",
});