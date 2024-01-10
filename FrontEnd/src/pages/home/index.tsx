import React from "react";
import User from "../../containers/user";
import Activity from "../../components/activity";
import StatsData from "../../containers/StatsData";
import Nutrition from "../../components/nutrition";
import "./style.css";
import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <User userName="Tomase" />
      <div className="container">
        <section className="HomeStatistics ">
          <Activity />
          <StatsData />
        </section>
        <section className="SectionNutrition">
          <Nutrition Nutritionicon={CaloriesIcon} NutritionType="Calories" />
          <Nutrition Nutritionicon={ProteinesIcon} NutritionType="Proteines" />
          <Nutrition Nutritionicon={GlucidesIcon} NutritionType="Glucides" />
          <Nutrition Nutritionicon={LipidesIcon} NutritionType="Lipides" />
        </section>
      </div>
    </div>
  );
};

export default Home;
