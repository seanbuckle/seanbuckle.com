import axios from "npm:axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/seanbuckle/repos",
});

export const getProjects = () => {
  return api.get("").then((response) => {
    return response.data;
  });
};
