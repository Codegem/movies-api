import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/home";
import Shows from "./pages/shows";
import Movies from "./pages/movies";
import Upcoming from "./pages/upcoming";
import PageError from "./pages/404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/movies-api/" />
        </Route>
        <Route path="/movies-api/" exact component={Home} />
        <Route path="/movies-api/movies" exact component={Movies} />
        <Route path="/movies-api/shows" exact component={Shows} />
        <Route path="/movies-api/upcoming" exact component={Upcoming} />
        <Route path="*" component={PageError} />
      </Switch>
    </Router>
  );
}

export default App;
