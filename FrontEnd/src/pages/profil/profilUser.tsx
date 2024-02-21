/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Profil Component
 * @component
 * @returns {JSX.Element} - The rendered Profil component.
 */

import React, { useEffect, useState } from "react";
import User from "../../containers/user";
import { useParams, Navigate } from "react-router-dom";
import LineCharte from "../../components/lineChart";
import RadarChartComponent from "../../components/radarChart";
import RadialBarChartComponent from "../../components/radialBarChart";
import BarChartComponent from "../../components/BarChart";
import "./style.css";
import SectionNutrition from "../../containers/SectionNutrition";
import { FormatLabelKind } from "../../helpers/modelisation.tsx";

import Error from "./error.tsx";

interface ProfilUserProps {
  chekError: boolean;
  id: string;
  data: [] | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  infoUser: any;
  Iserror: boolean | undefined;
}

const ProfilUser: React.FC<ProfilUserProps> = ({ infoUser, Iserror }) => {
  document.title = "Profil - SportSee";
  const { id } = useParams() ?? { id: undefined };

  const isApiUser = [12, 18].includes(parseInt(id ?? "0", 10));
  const isMockUser = [1, 2].includes(parseInt(id ?? "0", 10));
  const [isUserAccessible, setIsUserAccessible] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isMockUser && !isApiUser) {
          setIsUserAccessible(false);
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    fetchData();
  }, [id, isApiUser, isMockUser]);

  const radarChartData = infoUser?.performance?.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any) => ({
      kind: FormatLabelKind.format(item.kind),
      value: item.value,
    }))
    .reverse();

  if (!isUserAccessible) {
    return <Navigate to="/*" />;
  } else if (Iserror) {
    return <Error />;
  } else {
    return (
      <div className="profil">
        <User userName={infoUser?.userInfos?.firstName ?? ""} />
        <div className="container">
          <section className="profilStatistics">
            {infoUser?.activity?.sessions && (
              <BarChartComponent data={infoUser?.activity.sessions} />
            )}
            <div className="statsData">
              <LineCharte data={infoUser?.averageSessions} />
              {radarChartData && <RadarChartComponent data={radarChartData} />}
              {infoUser?.score && (
                <RadialBarChartComponent score={infoUser?.score} />
              )}
            </div>
          </section>
          <SectionNutrition
            calorieCount={infoUser?.keyData?.calorieCount}
            proteinCount={infoUser?.keyData?.proteinCount}
            carbohydrateCount={infoUser?.keyData?.carbohydrateCount}
            lipidCount={infoUser?.keyData?.lipidCount}
          />
        </div>
      </div>
    );
  }
};

export default ProfilUser;
