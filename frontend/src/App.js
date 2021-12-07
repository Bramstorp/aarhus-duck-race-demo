import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { Layout } from "./Layout/Layout";

import { Home } from "./modules/Home/Home"
import { Concept } from './modules/Concept/Concept'
import { Buy } from './modules/Buy/Buy'
import { Event } from './modules/Event/Event'
import { Prizes } from './modules/Prizes/Prizes'
import { Purpose } from "./modules/Purpose/Purpose"

function App() {
  return (
    <HashRouter basename={"/aarhus-duck-race-demo"}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/concept/" component={Concept} />
          <Route exact path="/buy/" component={Buy} />
          <Route exact path="/event/" component={Event} />
          <Route exact path="/prizes/" component={Prizes} />
          <Route exact path="/purpose/" component={Purpose} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
