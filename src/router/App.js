// ------------------------------ import libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ------------------------------ import components
import { LandingPage } from '../pages/Landing';
import { UserPage } from '../pages/UserPage';
import { ExperienceDetails } from '../pages/ExperienceDetails';
import { ExperienceCreation } from '../pages/ExperienceCreation';
// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user" component={UserPage} />
        <Route
          exact
          path="/experience"
          component={ExperienceDetails}
        />
        <Route
          exact
          path="/create-experience"
          component={ExperienceCreation}
        />
      </Switch>
    </BrowserRouter>
  );
};
