import React from "react";
import { Route } from "react-router";
import {About} from '../pages/about'
import {Projects} from '../pages/projects';

const Routes = () => {
  return (
    <>
      <Route path="/about" link={About}/>
      <Route path="/projects" link={Projects}/>
    </>
  );
};

export default Routes;
