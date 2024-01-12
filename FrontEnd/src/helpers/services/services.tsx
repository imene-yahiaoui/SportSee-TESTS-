import axios from "axios";

export const fetchDataUser = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}`);
};

export const fetchaverageSessions = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/average-sessions`);
};

export const fetchPerformance = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/performance`);
};
