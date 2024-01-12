import React, { useEffect, useState } from "react";
import LineCharte from "../../components/lineChart";
import "./style.css";
import { fetchaverageSessions } from "../../helpers/services/services";
const StatsData: React.FC = () => {
  const [averageSessions, setAverageSessions] = useState();
  useEffect(() => {
    fetchaverageSessions().then((res) =>
      setAverageSessions(res.data.data.sessions)
    );
  }, []);
  console.log("averageSessions", averageSessions);
  return (
    <div className="statsData">
      <LineCharte data={averageSessions} />
    </div>
  );
};

export default StatsData;
