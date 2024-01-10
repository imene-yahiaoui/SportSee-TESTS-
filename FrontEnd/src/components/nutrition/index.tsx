import React from "react";

import "./style.css";

const Nutrition: React.FC = ({Nutritionicon,NutritionType}) => {
  return (
    <div className="nutrition">
      <img  className="NutritionContainer"src={Nutritionicon} alt="icon"/>
      <div className="NutritionInfo">
      <h5>1,930kCal </h5>
      <p> {NutritionType} </p>
      </div>
    </div>
  );
};

export default Nutrition;
