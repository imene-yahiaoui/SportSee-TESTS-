import axios from "axios";
import userData from "../../assets/mock/userData.json";
import activity from "../../assets/mock/activity.json";

export const isBackendAvailable = () => {
  return false;
};

export const userDatas = () => {
  return userData;
};
export const userActivity = () => {
  return activity;
};

export const getDataUser = (userID) => {
  /**
   * Check if the backend is available
   */

  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}`);
  } else {
    /**
     * Use the data from the JSON file if the backend is not available
     */
    console.log("le backend n'est pas disponible");
    return Promise.resolve(userData);
  }
};

export const getAverageSessions = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/average-sessions`);
};

export const getPerformance = (userID) => {
  return axios.get(`http://localhost:3000/user/${userID}/performance`);
};

export const getActivity = (userID) => {
  if (isBackendAvailable()) {
  return axios.get(`http://localhost:3000/user/${userID}/activity`);
  }
  else{
    return Promise.resolve(activity);
  }
};
