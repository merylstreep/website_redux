import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { Highlights } from "../pages/Highlights";
import { AboutMe } from "../pages/AboutMe";

const Routes = () => {
  return (
    <Switch>
      {/*<Route path="/highlights" component={Highlights} />*/}
      <Route path={"/about-me"} component={AboutMe} />
      <Route path={"/"} component={Home} />
    </Switch>
  );
};

export default Routes;
