import axios from "axios";

const mainBaseURL = "https://font-verse-api.onrender.com/api";
const localBaseURL = "http://localhost:5000/api";

const instance = axios.create({
  baseURL: localBaseURL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
