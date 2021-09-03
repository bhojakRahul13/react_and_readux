import Table from "./Components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Components/Post";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Table} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
