import React from "react";
import User from "../../containers/user";
import "./style.css";

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <User userName="Tomase" />
    </div>
  );
};

export default Home;
