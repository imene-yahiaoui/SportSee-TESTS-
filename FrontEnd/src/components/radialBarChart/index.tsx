import React from "react";

import "./style.css";
const data = 33;

const CircleChart = ({ percentage }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg height="200" width="200" className="CircleChart">
      <circle
        cx="100"
        cy="100"
        r={radius}
        stroke="#FF0000"
        strokeWidth="10"
        fill="blue"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(190 100 100)`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        fontSize="20"
        fill="#FF0000"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

const RadialBarChartComponent = () => {
  return <CircleChart width="30%" height="100%" percentage={data} />;
};

export default RadialBarChartComponent;
