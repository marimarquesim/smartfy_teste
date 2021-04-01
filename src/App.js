import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SeriesPage } from "./components/SeriesPage";

import { Details } from "./components/Details";

import {SerieDetails} from "./components/SerieDetails";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/movies/details/:id">
            <Details />
          </Route>

          
          <Route path="/series/details/:id">
            <SerieDetails />
          </Route>

          <Route path="/series">
            <SeriesPage />
          </Route>
         
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
