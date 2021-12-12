import React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { Layout } from "./Layout/Layout";

import { Home } from "./modules/Home/Home"
import { Concept } from './modules/Concept/Concept'
import { Buy } from './modules/Buy/Buy'
import { Event } from './modules/Event/Event'
import { Prizes } from './modules/Prizes/Prizes'
import { Purpose } from "./modules/Purpose/Purpose"
import { AboutUs } from "./modules/AboutUs/AboutUs"
import { Donate } from "./modules/Donate/Donate"
import { LoadingSplash } from './modules/LoadingSplash/LoadingSplash'
import { Signup } from './modules/userCreation/Signup'


function App() {
    return ( 
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/concept" component={Concept} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/prizes" component={Prizes} />
          <Route exact path="/purpose" component={Purpose} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/Donate" component={Donate} />
          <Route exact path="/splash" component={LoadingSplash} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
}

export default App;