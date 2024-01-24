/**
 * CustomTooltip Component
 *
 * The CustomTooltip component represents a custom tooltip for chart elements.
 * @param {boolean} active - Indicates whether the tooltip is active.
 * @param {Object[]} payload - An array of payload objects containing data.
 * @param {number} payload[].value - The value to be displayed in the tooltip.
 * @returns {JSX.Element | null} - The rendered CustomTooltip component or null if not active.
 */
export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="customTooltipText">{payload[0].value + "kg"}</p>
        <p className="customTooltipText">{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};
