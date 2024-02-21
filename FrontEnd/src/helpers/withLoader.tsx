import Loading from "./loading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithLoader = (WrappedComponent: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: & { loading: boolean }) => {
    const { loading, ...restProps } = props;
    console.log("Props dans WithLoader:", props);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log("la valure de loading dans whith loading ", loading);

    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    } else {
      return <WrappedComponent {...restProps} />;
    }
  };
};
export default WithLoader;
