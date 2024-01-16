import axios from "axios";

export const getDataUser = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}`);
};

export const getAverageSessions = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/average-sessions`);
};

export const getPerformance = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/performance`);
};

export const getActivity = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/activity`);
};
