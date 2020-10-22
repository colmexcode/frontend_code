// ------------------------------ import libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ------------------------------ import components
import { LandingPage } from '../pages/Landing';
import { HomePage } from '../pages/Home';


// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
