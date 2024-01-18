import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

import "./style.css";

export default class RadialBarChartComponent extends PureComponent {
  render() {
    const { data } = this.props;
    
    const score = data.todayScore ? data.todayScore : data.score;

    const dataArray = [{ name: "score", value: score }];
    

    return (
      <div className="RadialBarChart">
        <h3 className="RadialBarChartTitle">Score</h3>
        <ResponsiveContainer width="90%" height="70%">
          <div className="scoreValue">
            <p className="scoreNumber">{score * 100}%</p>
            <p>de votre</p>
            <p>objectif</p>
          </div>
          <RadialBarChart
            innerRadius="0%"
            outerRadius="0%"
            data={dataArray}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar
              data={[{ value: 1 }]}
              dataKey="value"
              barSize={190}
              fill="#ffffff"
              isAnimationActive={false}
            />
            <RadialBar
              dataKey="value"
              barSize={10}
              cornerRadius={100}
              fill="#FF0000"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
RadialBarChartComponent.propTypes = {
  data: PropTypes.shape({
    todayScore: PropTypes.number,
    score: PropTypes.number.isRequired,
  }).isRequired,
};