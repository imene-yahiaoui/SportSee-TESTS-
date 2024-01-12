import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {

    const data = payload[0].payload; 

    return (
      <div className="customTooltip">
        <p className="customTooltipText">{data.sessionLength + "min"}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
