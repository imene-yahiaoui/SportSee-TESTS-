import React, { useState, useEffect } from "react";
import Loading from "./loading";

const WithLoader = (WrappedComponent) => {
  return (props) => {
    console.log("Props dans WithLoader:", props);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, [props]);
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};
export default WithLoader;
