import { User12 } from "./CallServices";
//import { User18 } from "./CallServices";
import axios from "axios";

export const fetchDataUser = () => {
  return axios.get(`http://localhost:3000/user/${User12}`);
};

export const fetchaverageSessions = () => {
  return axios.get(`http://localhost:3000/user/${User12}/average-sessions`);
};
