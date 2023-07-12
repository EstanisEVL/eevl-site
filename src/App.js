import MobileMenuContext from "./utils/context/MobileMenuContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/presentation/main/Main";
import NavBar from "./components/presentation/navbar/NavBar";
import "./styles/main.scss";

function App() {
  return (
    <MobileMenuContext>
      <div className="App">
        <Router>
          <NavBar />
          <Main />
        </Router>
      </div>
    </MobileMenuContext>
  );
}

export default App;
