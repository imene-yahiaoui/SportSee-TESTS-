/**
 * Profil Component
 * @component
 * @returns {JSX.Element} - The rendered Profil component.
 */

import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import Nutrition from "../../components/nutrition";
import { useParams, Navigate } from "react-router-dom";
import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import {
  getAverageSessions,
  getDataUser,
  getPerformance,
  getActivity,
  userDatas,
  userActivity,
  userAverageSession,
  userPerformance,
} from "../../helpers/services/services";
import CheckBackend from "../../helpers/services/checkBackend";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import RadialBarChartComponent from "../../components/radialBarChart";
import BarChartComponent from "../../components/BarChart";
import "./style.css";
import Loading from "../../helpers/loading";
import { CallBackend } from "../../helpers/services/callBackend";
import { FormatLabelKind, UserData } from "../../helpers/modelisation.tsx";

interface ProfilProps {
  id: string;
}

const Profil: React.FC<ProfilProps> = () => {
  document.title = "Profil - SportSee";
  const { id } = useParams();
  const [isBackendAccessible, setIsBackendAccessible] = useState<
    boolean | null
  >(null);
  const [infoUser, setInfoUser] = useState<UserData | null>(null);

  const [isUserAccessible, setIsUserAccessible] = useState<boolean>(true);
  const [networkNotFound, setNetworkNotFound] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /**
         * Hook state for the backend accessibility status.
         * @type {boolean | null}
         */
        const isBackendAccessibleResult = await CallBackend();
        setIsBackendAccessible(isBackendAccessibleResult);
        console.log("isBackendAccessible", isBackendAccessible);

        const isApiUser = [12, 18].includes(parseInt(id, 10));
        const isMockUser = [1, 2].includes(parseInt(id, 10));
        if (isApiUser || isMockUser || parseInt(id, 10) === null) {
          setIsUserAccessible(true);
        } else {
          setIsUserAccessible(false);
        }
        if (isBackendAccessible === false && isApiUser) {
          setNetworkNotFound(true);
        } else if (isBackendAccessible === true && isApiUser) {
          fetchDataForApiUser(id);
        } else if (
          (isBackendAccessible === true || isBackendAccessible === false) &&
          isMockUser
        ) {
          fetchDataForMockUser(id);
        }

        const loadingTimer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        return () => clearTimeout(loadingTimer);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
        // Gérer l'erreur comme vous le souhaitez
      }
    };

    fetchData();
  }, [id, isBackendAccessible]);
  /**
   * Fetches user data from API.
   * @async
   * @function
   * @param {string} userId - The ID of the user.
   * @returns {Promise<void>}
   */

  const fetchDataForApiUser = async (userId) => {
    try {
      const userDataResponse = await getDataUser(userId);
      const userData = userDataResponse.data.data;

      const averageSessionsData = await getAverageSessions(userId);
      const performanceData = await getPerformance(userId);
      const activityData = await getActivity(userId);

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
          averageSessionsData.data.data.sessions,
          performanceData.data.data,
          activityData.data.data
        )
      );
    } catch (error) {
      console.error("Error fetching API user data:", error);
      setError(true);
    }
  };

  /**
   * Fetches user data from mock data.
   * @function
   * @param {string} userId - The ID of the user.
   * @returns {void}
   */
  const fetchDataForMockUser = async (userId) => {
    try {
      const userData = userDatas();
      const userById = userData.find(
        (user) => user.id === parseInt(userId, 10)
      );
      const userActivitys = userActivity();
      const userPerformances = userPerformance();
      const ActivityById = userActivitys.find(
        (user) => user.userId === parseInt(userId, 10)
      );

      const PerformanceById = userPerformances.find(
        (user) => user.userId === parseInt(userId, 10)
      );
      const userAverageSessions = userAverageSession();
      const AverageSessionsById = userAverageSessions.find(
        (user) => user.userId === parseInt(userId, 10)
      );

      setInfoUser(
        new UserData(
          userById.id,
          userById.score,
          userById.todayScore,
          userById.userInfos.firstName,
          userById.keyData.calorieCount,
          userById.keyData.proteinCount,
          userById.keyData.carbohydrateCount,
          userById.keyData.lipidCount,
          AverageSessionsById.sessions,
          PerformanceById,
          ActivityById
        )
      );
    } catch (error) {
      console.error("Error fetching Mock ", error);
      setError(true);
    }
  };

  const radarChartData = infoUser?.performance.data
    .map((item) => ({
      kind: FormatLabelKind.format(item.kind),
      value: item.value,
    }))
    .reverse();

  const nutritionData = [
    {
      icon: CaloriesIcon,
      type: "Calories",
      keyData: infoUser?.keyData?.calorieCount,
    },
    {
      icon: ProteinesIcon,
      type: "Proteines",
      keyData: infoUser?.keyData?.proteinCount,
    },
    {
      icon: GlucidesIcon,
      type: "Glucides",
      keyData: infoUser?.keyData?.carbohydrateCount,
    },
    {
      icon: LipidesIcon,
      type: "Lipides",
      keyData: infoUser?.keyData?.lipidCount,
    },
  ];

  if (!isUserAccessible) {
    return <Navigate to="/*" />;
  } else if (networkNotFound) {
    return <CheckBackend />;
  } else if (error) {
    return (
      <div>
        <p className="errBackend">
          Une erreur s'est produite lors de la récupération des données.
        </p>
      </div>
    );
  } else {
    return (
      <div className="profil">
        {isLoading ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : (
          <>
            <User userName={infoUser?.userInfos?.firstName} />
            <div className="container">
              <section className="profilStatistics">
                {infoUser?.activity.sessions && (
                  <BarChartComponent data={infoUser?.activity.sessions} />
                )}
                <div className="statsData">
                  <LineCharte data={infoUser?.averageSessions} />
                  {radarChartData && (
                    <RadarChartComponent data={radarChartData} />
                  )}
                  {infoUser?.score && (
                    <RadialBarChartComponent score={infoUser?.score} />
                  )}
                </div>
              </section>
              <section className="SectionNutrition">
                {nutritionData.map((nutrition, index) => (
                  <Nutrition
                    key={index}
                    Nutritionicon={nutrition.icon}
                    NutritionType={nutrition.type}
                    keyData={nutrition.keyData}
                  />
                ))}
              </section>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Profil;
