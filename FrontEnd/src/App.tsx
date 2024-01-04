import "./App.css";
import RoutesPath from "./helpers/routesPath";
import Header from "./containers/header";
import Verticalnavigation from "./containers/verticalNavigation";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <RoutesPath />
        <Verticalnavigation />
      </div>
    </div>
  );
}

export default App;
