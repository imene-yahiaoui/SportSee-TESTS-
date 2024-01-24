import "./App.css";
import RoutesPath from "./helpers/routesPath";
import React, { useState, useEffect } from "react";
import Header from "./containers/header";
import Verticalnavigation from "./containers/verticalNavigation";
import { BallTriangle } from "react-loader-spinner";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="App">
      <Header />

      <Verticalnavigation />
      {isLoading ? (
        <div className="loading-container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="RoutesPath">
          <RoutesPath />
        </div>
      )}
    </div>
  );
}

export default App;
