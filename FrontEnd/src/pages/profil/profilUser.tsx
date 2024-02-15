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
import useUserData from "../../helpers/services/fetchdata";
import Error from "./error.tsx";
import Loading from "../../helpers/loading";

interface ProfilProps {
  chekError: boolean;
  id: string;
  data: Session[] | null | undefined;
}

const ProfilUser: React.FC<ProfilProps> = (  ) => {
  document.title = "Profil - SportSee";
  const { id } = useParams();

  const isApiUser = [12, 18].includes(parseInt(id, 10));
  const isMockUser = [1, 2].includes(parseInt(id, 10));
  const { infoUser, Iserror } = useUserData(isMockUser, id);

  console.log("console dans profil", Iserror);

  const [isUserAccessible, setIsUserAccessible] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isMockUser && !isApiUser) {
          setIsUserAccessible(false);
        }
      } catch (error) {
        console.log("je suis dans lerror  de useeffect de profileUser");
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    fetchData();
  }, [id, isApiUser, isMockUser]);

  /**
   * Fetches user data.
   * @async
   * @function
   * @param {boolean} isMockUser - Indicates if the user is a mock user.
   * @param {string} userId - The user's ID.
   * @returns {Promise<void>}
   */

  const radarChartData = infoUser?.performance?.data
    .map((item) => ({
      kind: FormatLabelKind.format(item.kind),
      value: item.value,
    }))
    .reverse();

  if (!isUserAccessible) {
    return <Navigate to="/*" />;
  } else if (Iserror === undefined ) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
   
  } else if (Iserror) {
    return <Error />;
  } else {
    return (
      <div className="profil">
        <User userName={infoUser?.userInfos?.firstName} />
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
