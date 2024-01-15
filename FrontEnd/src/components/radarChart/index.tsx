import React, { PureComponent } from "react";
import "./style.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default class RadarChartComponent extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer
        width="40%"
        height="100%"
        className="RadarChartContainer"
      >
        <RadarChart cx="50%" cy="50%" outerRadius={90} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "24px",
              textAlign: "right",
              position: "insideBottom",
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
  }
}
RadarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
