import React from "react";
import User from "../../containers/user";
import Activity from "../../components/activity";
import StatsData from "../../containers/StatsData";
import Nutrition from "../../components/nutrition";
import "./style.css";

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
          <Nutrition />
          <Nutrition />
          <Nutrition />
          <Nutrition />
        </section>
      </div>
    </div>
  );
};

export default Home;
