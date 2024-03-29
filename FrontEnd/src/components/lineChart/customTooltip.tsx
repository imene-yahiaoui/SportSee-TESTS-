/**
 * Custom tooltip component for chart lines.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {boolean} props.active - Whether the tooltip is active.
 * @param {Array} props.payload - The payload data for the tooltip.
 * @returns {JSX.Element | null} - The rendered CustomTooltip component or null if not active.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: React.FC<{ active: boolean; payload: any[] }> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="customTooltipChartLine">
        <p className="customTooltipTextChartLine">
          {data.sessionLength + "min"}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
