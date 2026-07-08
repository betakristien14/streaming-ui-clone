import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getMovies = async () => {
  const response = await api.get("/movies");
  return response.data;
};
