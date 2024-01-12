import "./App.css";
import RoutesPath from "./helpers/routesPath";
import Header from "./containers/header";
import Verticalnavigation from "./containers/verticalNavigation";

function App() {
  return (
    <div className="App">
      
        <Header />
       
        <Verticalnavigation />
        <RoutesPath />
   
     
    </div>
  );
}

export default App;
