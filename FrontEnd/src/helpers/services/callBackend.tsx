import axios from "axios";

export const CallBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/12");
    return response ? true : false;
  } catch (error) {
    return false;
  }
};