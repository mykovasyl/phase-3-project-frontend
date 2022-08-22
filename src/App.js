import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ChoreList from "./ChoreList";
import AssignChores from "./AssignChores";
import AddChildren from "./AddChildren";

function App() {
  const [children, setChildren] = useState([]);
  const [chores, setChores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/children")
      .then((resp) => resp.json())
      .then((allChildren) => setChildren(allChildren));

    fetch("http://localhost:9292/chores")
      .then((resp) => resp.json())
      .then((allChores) => setChores(allChores));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/chorelist">
          <ChoreList chores={chores} setChores={setChores} />
        </Route>
        <Route path="/assignchores">
          <AssignChores
            children={children}
            chores={chores}
            setChores={setChores}
          />
        </Route>
        <Route path="/addchildren">
          <AddChildren children={children} setChildren={setChildren} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 path not found</h1>
          <h3>
            Try using the following paths: /, /chorelist, /assignchores,
            /addchildren
          </h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
