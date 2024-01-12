import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import Activity from "../../components/activity";
import Nutrition from "../../components/nutrition";
import { useParams } from "react-router-dom";
import { fetchaverageSessions } from "../../helpers/services/services";
import { fetchDataUser } from "../../helpers/services/services.tsx";
import { fetchPerformance } from "../../helpers/services/services.tsx";

import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import "./style.css";

interface UserInfo {
  userInfos: {
    firstName: string;
    lastName: string;
  };
}

interface Session {
  day: number;
  sessionLength: number;
}
interface Performance {
  day: number;
  sessionLength: number;
}

const Profil: React.FC<ProfilProps> = () => {
  document.title = "Profil - SportSee";
  const { id } = useParams();

  const [infoUser, setInfoUser] = useState<UserInfo | null>(null);
  const [averageSessions, setAverageSessions] = useState<Session[] | null>(
    null
  );
  const [performance, setPerformance] = useState<Performance[] | null>(null);

  useEffect(() => {
    fetchDataUser(id).then((res) => setInfoUser(res.data.data));
    fetchaverageSessions(id).then((res) =>
      setAverageSessions(res.data.data.sessions)
    );
    fetchPerformance(id).then((res) => setPerformance(res.data.data));
  }, [id]);
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
          <Activity />
          <div className="statsData">
            {averageSessions && <LineCharte data={averageSessions} />}
            {radarChartData && <RadarChartComponent data={radarChartData} />}
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
