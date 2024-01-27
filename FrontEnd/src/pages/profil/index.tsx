import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import Nutrition from "../../components/nutrition";
import { useParams, Navigate } from "react-router-dom";
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
import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import RadialBarChartComponent from "../../components/radialBarChart";
import BarChartComponent from "../../components/BarChart";
import "./style.css";
import Loading from "../../helpers/loading";
import { CallBackend } from "../../helpers/services/callBackend";

interface UserInfo {
  userInfos: {
    firstName: string;
    lastName: string;
  };
  score: number;
  todayScore: number;
}

interface Session {
  day: number;
  sessionLength: number;
}
interface Performance {
  day: number;
  sessionLength: number;
}

interface Activity {
  day: number;
  kilogram: number;
  calories: number;
}

interface ProfilProps {
  id: string;
}

const Profil: React.FC<ProfilProps> = () => {
  document.title = "Profil - SportSee";
  const { id } = useParams();
  const [isBackendAccessible, setIsBackendAccessible] = useState<
    boolean | null
  >(null);
  const [infoUser, setInfoUser] = useState<UserInfo | null>(null);
  const [averageSessions, setAverageSessions] = useState<Session[] | null>(
    null
  );
  const [performance, setPerformance] = useState<Performance[] | null>(null);
  const [activity, setActivity] = useState<Activity[] | null>(null);
  const [isUserAccessible, setIsUserAccessible] = useState<boolean>(true);
  const [networkNotFound, setNetworkNotFound] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  //fetch datas
  const fetchDataForApiUser = async (userId) => {
    try {
      const userData = await getDataUser(userId);
      setInfoUser(userData.data.data);

      const averageSessionsData = await getAverageSessions(userId);
      setAverageSessions(averageSessionsData.data.data.sessions);

      const performanceData = await getPerformance(userId);
      setPerformance(performanceData.data.data);

      const activityData = await getActivity(userId);
      setActivity(activityData.data.data);
    } catch (error) {
      console.error("Error fetching API user data:", error);
    }
  };

  const fetchDataForMockUser = (userId) => {
    const userData = userDatas();
    const userById = userData.find((user) => user.id === parseInt(userId, 10));

    setInfoUser(userById);

    const userActivitys = userActivity();
    const ActivityById = userActivitys.find(
      (user) => user.userId === parseInt(userId, 10)
    );
    setActivity(ActivityById);

    const userPerformances = userPerformance();
    const PerformanceById = userPerformances.find(
      (user) => user.userId === parseInt(userId, 10)
    );
    setPerformance(PerformanceById);

    const userAverageSessions = userAverageSession();
    const AverageSessionsById = userAverageSessions.find(
      (user) => user.userId === parseInt(userId, 10)
    );
    setAverageSessions(AverageSessionsById.sessions);
  };

  //
  const formatLabelKind = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return kind;
    }
  };

  const radarChartData = performance?.data
    .map((item) => ({
      kind: formatLabelKind(item.kind),
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
                {activity && <BarChartComponent data={activity?.sessions} />}
                <div className="statsData">
                  {averageSessions && <LineCharte data={averageSessions} />}
                  {radarChartData && (
                    <RadarChartComponent data={radarChartData} />
                  )}
                  {infoUser && <RadialBarChartComponent data={infoUser} />}
                </div>
              </section>
              <section className="SectionNutrition">
                {nutritionData.map((nutrition, index) => (
                  <Nutrition
                    key={index}
                    NutritionIcon={nutrition.icon}
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
