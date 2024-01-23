import axios from "axios";
import userData from "../../assets/mock/userData.json";
import activity from "../../assets/mock/activity.json";
import averageSessions from "../../assets/mock/average-sessions.json";
import performance from "../../assets/mock/performance.json";
/**
 * Function to check if the backend is available
 */

export const isBackendAvailable = () => true;
/**
 * Functions to return mock data
 */

export const userDatas = () => userData;
export const userActivity = () => activity;
export const userAverageSession = () => averageSessions;
export const userPerformance = () => performance;

/**
 * Function to get user data
 */
export const getDataUser = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}`);
  } else {
    return Promise.resolve(userData);
  }
};
/**
 * Function to get Average Sessions
 */
export const getAverageSessions = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/average-sessions`);
  } else {
    return Promise.resolve(averageSessions);
  }
};
/**
 * Function to get Performance
 */
export const getPerformance = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/performance`);
  } else {
    return Promise.resolve(performance);
  }
};
/**
 * Function to get   Activity
 */
export const getActivity = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/activity`);
  } else {
    return Promise.resolve(activity);
  }
};
