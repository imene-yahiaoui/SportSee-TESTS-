import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import Activity from "../../components/activity";
import StatsData from "../../containers/StatsData";
import Nutrition from "../../components/nutrition";
import "./style.css";
import { fetchDataUser } from "../../helpers/services/services.tsx";

import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
const Home: React.FC<HomeProps> = () => {
  const [infoUser, setInfoUser] = useState();

  useEffect(() => {
    fetchDataUser().then((res) => setInfoUser(res.data.data));
  }, []);

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

  console.log(infoUser);

  return (
    <div className="home">
      <User userName={infoUser?.userInfos?.firstName} />
      <div className="container">
        <section className="HomeStatistics ">
          <Activity />
          <StatsData />
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

export default Home;
