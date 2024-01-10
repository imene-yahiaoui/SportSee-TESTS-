import React from "react";

import "./style.css";

const Nutrition: React.FC = () => {
  return (
    <div className="nutrition">
      <img  className="NutritionContainer"src="../../assets/images/NutritionIcons/calories-icon.png" alt="icon"/>
      <div className="NutritionInfo">
      <h5>1,930kCal </h5>
      <p> Calories </p>
      </div>
    </div>
  );
};

export default Nutrition;
