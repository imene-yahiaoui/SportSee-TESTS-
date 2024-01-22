import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import Nutrition from "../../components/nutrition";
import { useParams } from "react-router-dom";
import {
  getAverageSessions,
  getDataUser,
  getPerformance,
  getActivity,
   test,
   isBackendAvailable,
} from "../../helpers/services/services";

import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import RadialBarChartComponent from "../../components/radialBarChart";
import BarChartComponent from "../../components/BarChart";
import "./style.css";
 
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

const Profil: React.FC<ProfilProps> = () => {
  document.title = "Profil - SportSee";
  const { id } = useParams();

  const [isBackendAccessible, setIsBackendAccessible] = useState< boolean |null>(null);
  const [infoUser, setInfoUser] = useState<UserInfo | null>(null);
  const [averageSessions, setAverageSessions] = useState<Session[] | null>(
    null
  );
  const [performance, setPerformance] = useState<Performance[] | null>(null);
  const [activity, setActivity] = useState<Activity[] | null>(null);

  useEffect(() => {
    const isBackendReady= isBackendAvailable()
    console.log("isBackendAvailable",isBackendReady)
    setIsBackendAccessible(isBackendReady)
    if(isBackendAccessible === true){
    getDataUser(id).then((res) => setInfoUser(res.data.data));
    getAverageSessions(id).then((res) =>
      setAverageSessions(res.data.data.sessions)
    );
    getPerformance(id).then((res) => setPerformance(res.data.data));
    getActivity(id).then((res) => setActivity(res.data.data));
  }
  else{
    console.log("l back nai pas despo ")
    const dataTest = test();
  
    console.log(id)
    const userById = dataTest.find((user) => user.id === parseInt(id, 10));
    console.log(userById);
 setInfoUser(userById)
// Affichez les données de l'utilisateur trouvé dans la console
console.log(userById);



    }

  }, [id, infoUser, isBackendAccessible]);


  
  

  /**
   * radar
   */
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

  return (
    <div className="profil">
      <User userName={infoUser?.userInfos?.firstName} />
      <div className="container">
        <section className="profilStatistics">
          {activity && <BarChartComponent data={activity?.sessions} />}
          <div className="statsData">
            {averageSessions && <LineCharte data={averageSessions} />}
            {radarChartData && <RadarChartComponent data={radarChartData} />}
            {infoUser && <RadialBarChartComponent data={infoUser} />}
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
    </div>
  );
};

export default Profil;
