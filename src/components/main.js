import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import LandingPage from './landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component = {LandingPage} />
      <Route path = '/aboutme' component = {AboutMe} />
      <Route path = '/contact' component = {Contact} />
      <Route path = '/projects' component = {Projects} />
      <Route path = '/resume' component = {Resume} />
    </Switch>
  </BrowserRouter>
)

export default Main;