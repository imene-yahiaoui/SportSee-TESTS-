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
} from "../../helpers/services/services";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import RadialBarChartComponent from "../../components/radialBarChart";
import BarChartComponent from "../../components/BarChart";
import "./style.css";
import Loading from "../../helpers/loading";
import { FormatLabelKind, UserData } from "../../helpers/modelisation.tsx";

interface ProfilProps {
  id: string;
}

const Profil: React.FC<ProfilProps> = () => {
  document.title = "Profil - SportSee";
  const { id } = useParams();

  const [infoUser, setInfoUser] = useState<UserData | null>(null);

  const [isUserAccessible, setIsUserAccessible] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isApiUser = [12, 18].includes(parseInt(id, 10));
        const isMockUser = [1, 2].includes(parseInt(id, 10));

        try {
          await fetchDataUser(isMockUser, id);
        } catch (e) {
          setError(true);
        }
         // Route protection
        if (!isMockUser && !isApiUser) {
          setIsUserAccessible(false);
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
      }
    };

    fetchData();
  }, [id]);
  /**
   * Fetches user data.
   * @async
   * @function
   * @param {boolean} isMockUser - Indicates if the user is a mock user.
   * @param {string} userId - The user's ID.
   * @returns {Promise<void>}
   */
  const fetchDataUser = async (isMockUser, userId) => {
    try {
      const userData = await getDataUser(isMockUser, userId);
      const averageSessionsData = await getAverageSessions(isMockUser, userId);
      const performanceData = await getPerformance(isMockUser, userId);
      const activityData = await getActivity(isMockUser, userId);
 // Update state with user data
      setInfoUser(
        new UserData(
          userData?.id,
          userData?.score,
          userData?.todayScore,
          userData?.userInfos.firstName,
          userData?.keyData.calorieCount,
          userData?.keyData.proteinCount,
          userData?.keyData.carbohydrateCount,
          userData?.keyData.lipidCount,
          averageSessionsData.sessions,
          performanceData,
          activityData
        )
      );
    } catch (error) {
      console.error("Error fetching API user data:", error);
      setError(true);
    }
  };
   
  const radarChartData = infoUser?.performance?.data
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
