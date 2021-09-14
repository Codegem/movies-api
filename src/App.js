import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { Header } from "./components/GlobalElements";
import Menu from "./components/Menu";
import Home from "./pages/home/index";
import Movie from "./pages/movie";
// https://www.traileraddict.com/deadpool-2/trailer
function App() {
  return (
    <Router>
      <Header>
        <Logo />
        <Menu />
        <Search />
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expenses" component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
