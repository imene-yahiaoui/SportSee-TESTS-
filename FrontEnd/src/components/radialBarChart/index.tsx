import React from "react";
import "./style.css";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
// import PropTypes from "prop-types";

const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <h1 className="desc">{payload[0].value + "%"}</h1>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    );
  }

  return null;
};

function RadialBarChartComponent() {
  const score = 30;

  // let score = [{ "name": "score", "value": (0.3 * 100) }]

  return (
    <article className="circleChart">
      <h1 className="score">Score</h1>
      <div className="path"></div>

      <ResponsiveContainer>
        <RadialBarChart
          width={"100%"}
          height={"100%"}
          innerRadius="72%"
          outerRadius="85%"
          data={score}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"value"}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            minAngle={5}
            fill="#E60000"
            background={{ fill: "#fff" }}
            position="center"
            clockWise={true}
            dataKey="value"
            legendType="square"
            data={score}
            cornerRadius="50%"
          />

          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="center"
            payload={score}
            content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  );
}

// RadialBarChartComponent.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default RadialBarChartComponent;
