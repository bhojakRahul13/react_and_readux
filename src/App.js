import Table from "./Components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component = {Table}/>
          <Route path="/post/:id" component = {Post}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
