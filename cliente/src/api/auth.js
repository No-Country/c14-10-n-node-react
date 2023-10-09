import axios from "axios";

const API = "http://localhost:3000";

export const signupRequest = (user) =>
  axios.post(`${API}/api/users/signup`, user);
