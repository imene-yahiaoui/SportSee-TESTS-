/**
 * Component representing nutrition information.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.Nutritionicon - The source URL of the nutrition icon image.
 * @param {string} props.NutritionType - The type of nutrition information.
 * @param {string} props.keyData - The key data related to the nutrition.
 * @returns {JSX.Element} - The rendered Nutrition component.
 */
import React from "react";
import "./style.css";

const Nutrition: React.FC = ({ Nutritionicon, NutritionType, keyData }) => {
  return (
    <div className="nutrition">
      <img className="NutritionContainer" src={Nutritionicon} alt="icon" />
      <div className="NutritionInfo">
        <h5>{keyData}</h5>
        <p> {NutritionType} </p>
      </div>
    </div>
  );
};

export default Nutrition;
