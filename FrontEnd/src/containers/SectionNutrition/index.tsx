/**
 * SectionNutrition Component
 *
 * This component displays nutritional information such as calories, proteins,carbohydrates, and lipids in a section format.
 *
 * @component
 * @param {Object} SectionNutritionProps - The properties of the SectionNutrition component.
 * @param {number} SectionNutritionProps.calorieCount - The count of calories to display.
 * @param {number} SectionNutritionProps.proteinCount - The count of proteins to display.
 * @param {number} SectionNutritionProps.carbohydrateCount - The count of carbohydrates to display.
 * @param {number} SectionNutritionProps.lipidCount - The count of lipids to display.
 * @returns {JSX.Element} - Rendered SectionNutrition component.
 */
import CaloriesIcon from "../../assets/images/NutritionIcons/calories-icon.png";
import ProteinesIcon from "../../assets/images/NutritionIcons/protein-icon.png";
import GlucidesIcon from "../../assets/images/NutritionIcons/carbs-icon.png";
import LipidesIcon from "../../assets/images/NutritionIcons/fat-icon.png";
import Nutrition from "../../components/nutrition";

interface SectionNutritionProps {
  calorieCount: number | undefined;
  proteinCount: number | undefined;
  carbohydrateCount: number | undefined;
  lipidCount: number | undefined;
}
const SectionNutrition: React.FC<SectionNutritionProps> = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}: SectionNutritionProps) => {
  const nutritionData = [
    {
      icon: CaloriesIcon,
      type: "Calories",
      keyData: calorieCount !== undefined ? calorieCount.toString() : "",
    },
    {
      icon: ProteinesIcon,
      type: "Proteines",
      keyData: proteinCount !== undefined ? proteinCount.toString() : "",
    },
    {
      icon: GlucidesIcon,
      type: "Glucides",
      keyData:
        carbohydrateCount !== undefined ? carbohydrateCount.toString() : "",
    },
    {
      icon: LipidesIcon,
      type: "Lipides",
      keyData: lipidCount !== undefined ? lipidCount.toString() : "",
    },
  ];
  return (
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
  );
};
export default SectionNutrition;
