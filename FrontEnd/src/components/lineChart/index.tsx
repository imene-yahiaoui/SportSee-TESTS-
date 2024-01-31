/**
 * Line chart component displaying the average session duration.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} props.data - The data used to populate the line chart.
 * @returns {JSX.Element} - The rendered LineCharte component.
 */

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import React, { PureComponent } from "react";
import CustomTooltip from "./customTooltip";
import "./style.css";
import PropTypes from "prop-types";

export default class LineCharte extends PureComponent {
  /**
   * Formats the label for each day.
   *
   * @param {number} day - The day number.
   * @returns {string} - The formatted label.
   */

  formatLabel = (day) => {
    if (day === 1) return "L";
    if (day === 2) return "M";
    if (day === 3) return "M";
    if (day === 4) return "J";
    if (day === 5) return "V";
    if (day === 6) return "S";
    if (day === 7) return "D";
    return day;
  };
  handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  render() {
    const { data } = this.props;
    // A darker rectangle following the mouse on the chart
    const CustomCursor = ({ points }) => (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[0]?.x}
        width={500}
        height={500}
      />
    );
    return (
      <div className="chartContainer">
        <h3 className="chartLineTitle">
          Durée moyenne des <br />
          sessions
        </h3>
        <ResponsiveContainer
          width="100%"
          height="100%"
          className={"responsiveContainer"}
        >
          <LineChart data={data} width="100%" height="100%">
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#colorUv)"
              strokeWidth={2}
              activeDot={{
                stroke: "#FFF",
                strokeWidth: 4,
                r: 2,
              }}
              dot={false}
            />

            <XAxis
              className={"customXAxisLabel"}
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "rgba(255,255,255,0.6)",
                fontSize: "0.75rem",
              }}
              tickFormatter={this.formatLabel}
              tickMargin={0}
              padding={{ left: 15, right: 15 }}
            />

            <span className="LineChartSpan"> </span>
            <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
LineCharte.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
