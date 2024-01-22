import axios from "axios";
import userData from "../../assets/mock/data.json";

export  const isBackendAvailable = () => {
 
  return false;
};


export const test = () => {
  return userData;
};
export const getDataUser = (userID) => {

    // Vérifiez si le backend est disponible
    if (isBackendAvailable()) {
      return axios.get(`http://localhost:3000/user/${userID}`);
    } else {
      // Utilisez les données du fichier JSON si le backend n'est pas disponible
      console.log("le backend n'est pas disponible")
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
  return axios.get(`http://localhost:3000/user/${userID}/activity`);
};

 
 