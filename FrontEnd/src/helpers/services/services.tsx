/**
 * Services Module
 *
 * This module provides functions to interact with user-related data.
 *
 * @module services
 */

import axios from "axios";
import userData from "../../assets/mock/userData.json";
import activity from "../../assets/mock/activity.json";
import averageSessions from "../../assets/mock/average-sessions.json";
import performance from "../../assets/mock/performance.json";

/**
 * Functions to return mock data.
 *
 * @function
 * @returns {Object} - Mock user data.
 */
export const userDatas = () => userData;
export const userActivity = () => activity;
export const userAverageSession = () => averageSessions;
export const userPerformance = () => performance;

/**
 * Function to get user data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to user data.
 */
export const getDataUser = async (isMockUser: boolean, userID: string) => {
  if (!isMockUser) {
    const response = await axios.get(`http://localhost:3000/user/${userID}`);
    return response?.data?.data;
  } else {
    return Promise.resolve(userData.find((user) => user.id === +userID));
  }
};
/**
 * Function to get average sessions data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to average sessions data.
 */
export const getAverageSessions = async (isMockUser, userID) => {
  if (!isMockUser) {
    const response = await axios.get(
      `http://localhost:3000/user/${userID}/average-sessions`
    );
    return response?.data?.data;
  } else {
    return Promise.resolve(
      averageSessions.find((user) => user.userId === +userID)
    );
  }
};
/**
 * Function to get performance data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to performance data.
 */
export const getPerformance = async (isMockUser, userID) => {
  if (!isMockUser) {
    const response = await axios.get(
      `http://localhost:3000/user/${userID}/performance`
    );
    return response?.data?.data;
  } else {
    return Promise.resolve(performance.find((user) => user.userId === +userID));
  }
};
/**
 * Function to get activity data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to activity data.
 */
export const getActivity = async (isMockUser, userID) => {
  if (!isMockUser) {
    const response = await axios.get(
      `http://localhost:3000/user/${userID}/activity`
    );
    return response?.data?.data;
  } else {
    return Promise.resolve(activity.find((user) => user.userId === +userID));
  }
};
