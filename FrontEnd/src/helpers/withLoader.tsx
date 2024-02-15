import { useState, useEffect } from "react";
import Loading from "./loading";
// import useUserData from "./services/fetchData";
const WithLoader = (WrappedComponent) => {
  return (props: unknown) => {
    console.log("Props dans WithLoader:", props);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(true);
    // const { Iserror } = useUserData();
    // console.log("console dans leader", Iserror);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, [props]);
    // if (loading ||Iserror === undefined ) {
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
