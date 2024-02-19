  /**
   * Fetches user data.
   * @async
   * @function
   * @param {boolean} isMockUser - Indicates if the user is a mock user.
   * @param {string} userId - The user's ID.
   * @returns {Promise<void>}
   */

import { useState, useEffect } from "react";
import { UserData } from "../../helpers/modelisation.tsx";
import {
  getAverageSessions,
  getDataUser,
  getPerformance,
  getActivity,
} from "../../helpers/services/services";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useUserData = (isMockUser: any, userId: any) => {
  const [infoUser, setInfoUser] = useState<UserData | null>(null);
  const [Iserror, setIsError] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const userData = await getDataUser(isMockUser, userId);
        const averageSessionsData = await getAverageSessions(
          isMockUser,
          userId
        );
        const performanceData = await getPerformance(isMockUser, userId);
        const activityData = await getActivity(isMockUser, userId);
        // Update state with user data

        setInfoUser(
          new UserData(
            userData.id,
            userData.score,
            userData.todayScore,
            userData.userInfos.firstName,
            userData.keyData.calorieCount,
            userData.keyData.proteinCount,
            userData.keyData.carbohydrateCount,
            userData.keyData.lipidCount,
            averageSessionsData.sessions,
            performanceData,
            activityData
          )
        );
        setIsError(false);
      } catch (e) {
        setIsError(true);

        console.log("la dans le fetch jai mis sett err true  ");
      }
    };

    fetchDataUser();
  }, [Iserror, isMockUser, userId]);

  return { infoUser, Iserror };
};

export default useUserData;
