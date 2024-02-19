/**
 * CustomTooltip Component
 *
 * The CustomTooltip component represents a custom tooltip for chart elements.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates whether the tooltip is active.
 * @param {Object[]} props.payload - An array of payload objects containing data.
 * @param {number} props.payload[].value - The value to be displayed in the tooltip.
 * @returns {JSX.Element | null} - The rendered CustomTooltip component or null if not active.
 */

interface CustomTooltipProps {
  active: boolean;
  payload: { value: number }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipBarChart">
        <p className="customTooltipText">{payload[0].value + "kg"}</p>
        <p className="customTooltipText">{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
