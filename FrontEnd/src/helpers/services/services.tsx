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
 * Function to check if the backend is available.
 *
 * @function
 * @returns {boolean} - True if the backend is available, false otherwise.
 */

export const isBackendAvailable = () => false;

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
export const getDataUser = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}`);
  } else {
    return Promise.resolve(userData);
  }
};
/**
 * Function to get average sessions data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to average sessions data.
 */
export const getAverageSessions = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/average-sessions`);
  } else {
    return Promise.resolve(averageSessions);
  }
};
/**
 * Function to get performance data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to performance data.
 */
export const getPerformance = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/performance`);
  } else {
    return Promise.resolve(performance);
  }
};
/**
 * Function to get activity data.
 *
 * @function
 * @param {number} userID - The ID of the user.
 * @returns {Promise} - A promise that resolves to activity data.
 */
export const getActivity = (userID) => {
  if (isBackendAvailable()) {
    return axios.get(`http://localhost:3000/user/${userID}/activity`);
  } else {
    return Promise.resolve(activity);
  }
};
