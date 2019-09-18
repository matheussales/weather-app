import axios from "axios";

const api = axios.create({
  baseURL: "https://fcc-weather-api.glitch.me/api"
});

export default api;
