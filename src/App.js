import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chorelist">
          <ChoreList />
        </Route>
        <Route path="/assignchores">
          <AssignChores />
        </Route>
        <Route path="/addchildren">
          <AddChildren />
        </Route>
        <Route path="*">
          <h1>404 path not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
