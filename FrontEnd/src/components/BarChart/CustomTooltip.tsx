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
    