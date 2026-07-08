import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = async (email, password) => {
  const response = await api.get(
    `/users?email=${email}&password=${password}`
  );

  return response.data[0];
};

export const register = async (user) => {
  const response = await api.post("/users", user);
  return response.data;
};
