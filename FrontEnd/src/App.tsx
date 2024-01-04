import "./App.css";
import RoutesPath from "./helpers/routesPath";
import Header from "./containers/header";
import Verticalnavigation from "./containers/verticalNavigation";

function App() {
  return (
    <div className="App">
      
        <Header />
        <div className="App-page">
        <Verticalnavigation />
        <RoutesPath />
      </div>
     
    </div>
  );
}

export default App;
