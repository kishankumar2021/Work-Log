import "./App.css";
import Login_Page from "./component/Form";
import Home from "./component/Home"
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login_Page} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </Router>
  );
}



export default App;
