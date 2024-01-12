import "./App.css";
import RoutesPath from "./helpers/routesPath";
import Header from "./containers/header";
import Verticalnavigation from "./containers/verticalNavigation";

function App() {
  return (
    <div className="App">
      <Header />

      <Verticalnavigation />
      <div className="RoutesPath" >
      <RoutesPath />
      </div>
    </div>
  );
}

export default App;
