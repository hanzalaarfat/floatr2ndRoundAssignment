import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmiCalculate from "./Component/EmiCalculate";
import EmiResult from "./Component/EmiResult";

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1>
      {true && <h1>ekkoo</h1>} */}

      <Router>
        <Switch>
          <Route path="/" exact component={EmiCalculate} />
          <Route path="/emi" exact component={EmiResult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
