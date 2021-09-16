import "./App.css";
import {
  Header,
  Authorization2,
  Registration,
  Profile,
  Home,
} from "./components";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route
          path="/authorization"
          render={() =>
            localStorage.token ? <Redirect to={"/"} /> : <Authorization2 />
          }
        />
        <Route
          path="/Profile"
          render={() =>
            !localStorage.token ? (
              <Redirect to={"/authorization"} />
            ) : (
              <Profile />
            )
          }
        />
        <Route
          path="/"
          render={() =>
            !localStorage.token ? <Redirect to={"/authorization"} /> : <Home />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
