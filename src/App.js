import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/home";
import Shows from "./pages/shows";
import Movies from "./pages/movies";
import Upcoming from "./pages/upcoming";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movies-api/" exact component={Home} />
        <Route path="/movies-api/movies" exact component={Movies} />
        <Route path="/movies-api/shows" component={Shows} />
        <Route path="/movies-api/upcoming" component={Upcoming} />
      </Switch>
    </Router>
  );
}

export default App;
