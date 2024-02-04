import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
