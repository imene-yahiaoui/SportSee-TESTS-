/**
 * RadarChartComponent - Component representing a radar chart.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} props.data - The data to be displayed on the radar chart.
 *   @param {string} props.data.kind - The type of data.
 *   @param {number} props.data.value - The value associated with this type of data.
 * @returns {JSX.Element} - The rendered RadarChartComponent.
 */

import "./style.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import useMediaQuery from "../../helpers/MediaQuery";

interface RadarChartProps {
  data: { kind: string; value: number }[];
}

const RadarChartComponent: React.FC<RadarChartProps> = ({ data }) => {
  const matches = useMediaQuery("(max-width:1025px)");

  return (
    <ResponsiveContainer
      width="30%"
      height="100%"
      className="RadarChartContainer"
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={matches ? 40 : 80}
        data={data}
        className="radar"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          className="PolarAngleAxis"
          dataKey="kind"
          tick={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: 12,
            fill: "#FFFFFF",
          }}
          axisLine={{
            stroke: "#FFFFFF",
            strokeWidth: 1,
          }}
        />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
