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
  const matches = useMediaQuery("(max-width:1300px)");

  return (
    <ResponsiveContainer
      width="30%"
      height="100%"
      className="RadarChartContainer"
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={matches ? 50 : 90}
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
