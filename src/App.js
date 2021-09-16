import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/home/index";
import Movie from "./pages/movie";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movies-api/" exact component={Home} />
        <Route path="/movies-api/add-expenses" component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
