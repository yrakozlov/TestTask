import "./App.css";
import { Header } from "./components";
import { Home, Registration, Authorization, Profile } from "./pages";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/registration"
          render={() =>
            localStorage.token ? <Redirect to={"/"} /> : <Registration />
          }
        />
        <Route
          path="/authorization"
          render={() =>
            localStorage.token ? <Redirect to={"/"} /> : <Authorization />
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
          exact
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
