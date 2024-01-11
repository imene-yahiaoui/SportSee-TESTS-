import React, { useEffect, useState } from "react";

import User from "../../containers/user";
import Activity from "../../components/activity";
import StatsData from "../../containers/StatsData";
import Nutrition from "../../components/nutrition";
import "./style.css";
import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import { fetchDataUser } from "../../helpers/services/services.tsx";

const Home: React.FC<HomeProps> = () => {
  const [infoUser, setInfoUser] = useState();

  useEffect(() => {
    fetchDataUser().then((res) => setInfoUser(res.data.data));
  }, []);
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
          <Nutrition
            Nutritionicon={CaloriesIcon}
            NutritionType="Calories"
            keyData={infoUser?.keyData?.calorieCount}
          />
          <Nutrition
            Nutritionicon={ProteinesIcon}
            NutritionType="Proteines"
            keyData={infoUser?.keyData?.proteinCount}
          />
          <Nutrition
            Nutritionicon={GlucidesIcon}
            NutritionType="Glucides"
            keyData={infoUser?.keyData?.carbohydrateCount}
          />
          <Nutrition
            Nutritionicon={LipidesIcon}
            NutritionType="Lipides"
            keyData={infoUser?.keyData?.lipidCount}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
