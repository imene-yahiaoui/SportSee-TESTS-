/**
 * Component representing a bar chart for daily activity.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} props.data - An array of objects representing daily activity data.
 * @returns {JSX.Element} - The rendered BarChartComponent component.
 */

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import "./style.css";
import PropTypes from "prop-types";

const formatDays = (tickItem, i) => {
  return i + 1;
};

export default class BarChartComponent extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <div className="Activity">
        <ResponsiveContainer width="90%" height="70%">
          <div className="headerBarChart">
            <p className="barChartTitle">Activité quotidienne</p>
            <div className="custom-tooltip-legend">
              <div className="kilogram">
                <div className="blackRound"></div>
                <p className="desc">Poids (kg)</p>
              </div>

              <div className="kilogram">
                <div className="redRound"></div>
                <p className="desc">Calories brûlées (kCal)</p>
              </div>
            </div>
          </div>
          <BarChart data={data} barSize={7} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="day"
              tick={{ fill: "#9B9EAC" }}
              tickLine={false}
              stroke="#DEDEDE"
              strokeWidth={2}
              tickMargin={16}
              tickFormatter={formatDays}
            />
            <YAxis
              orientation="right"
              tickCount={3}
              domain={["dataMin - 1", "dataMax"]}
              dataKey="kilogram"
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tick={{ stroke: "#9B9EAC" }}
            />

            <YAxis
              tickCount={6}
              domain={[0, 600]}
              dataKey="calories"
              axisLine={false}
              tickLine={false}
              tick={false}
              hide={true}
              yAxisId="cl"
            />
            <Tooltip
              offset={35}
              cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
              content={<CustomTooltip />}
            />

            <Bar
              stackId="kg"
              barSize={8}
              dataKey="kilogram"
              label={false}
              fill="#282D30"
              radius={[25, 25, 0, 0]}
            />

            <Bar
              stackId="cl"
              barSize={8}
              dataKey="calories"
              label={false}
              fill="#E60000"
              radius={[25, 25, 0, 0]}
              yAxisId="cl"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
