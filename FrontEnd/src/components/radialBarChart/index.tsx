/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Radial bar chart component displaying the user's score.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Object} props.data - The data containing the user's score.
 * @param {number} props.data.todayScore - The user's score for today.
 * @param {number} props.data.score - The user's score for today.
 * @returns {JSX.Element} - The rendered RadialBarChartComponent.
 */

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

import useMediaQuery from "../../helpers/MediaQuery";

import "./style.css";
interface RadialBarChartProps {
  score: number;
}
const RadialBarChartComponent: React.FC<RadialBarChartProps> = ({ score }) => {
  const matches = useMediaQuery("(max-width:1400px)");

  const dataArray = [{ name: "score", value: score }];

  return (
    <div className="RadialBarChart">
      <h3 className="RadialBarChartTitle">Score</h3>
      <div className="scoreValue">
        <p className="scoreNumber">{score * 100}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
      <ResponsiveContainer width="90%" height="80%">
        <RadialBarChart
          className="radialBarChartContainer"
          innerRadius="0%"
          outerRadius="0%"
          data={dataArray}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            // @ts-expect-error
            barSize={matches ? 130 : 150}
            fill="#ffffff"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            // @ts-expect-error
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarChartComponent;
