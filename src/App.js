import React from "react";

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import Cadastro from "./screens/Produto/Cadastro";
import Consulta from "./screens/Produto/Consulta";
import Listar from "./screens/Produto/Listagem";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Listar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

