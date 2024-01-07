import React from "react";
import User from "../../containers/user";
import Activity from "../../components/activity";
import StatsData from "../../containers/StatsData";
import "./style.css";

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <User userName="Tomase" />
      <div className="container">
        <Activity />
        <StatsData />
      </div>
    </div>
  );
};

export default Home;
