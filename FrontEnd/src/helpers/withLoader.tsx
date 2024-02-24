/**
 * WithLoader Component
 * @module WithLoader
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped with loading functionality.
 * @returns {React.FC<{ loading: boolean }>} - The wrapped component with loading logic.
 **/
import Loading from "./loading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithLoader = (WrappedComponent: any) => {
  /**
   * Wrapped component with loading logic.
   * @function
   * @param {Object} props - The props object containing the 'loading' property.
   * @param {boolean} props.loading - A flag indicating whether to display the loading indicator.
   * @returns {JSX.Element} - The rendered component with or without loading indicator.
   */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
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
