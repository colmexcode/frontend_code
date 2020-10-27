// ------------------------------ import libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ------------------------------ import components
import { LandingPage } from '../pages/Landing';
import { InterestForm } from '../pages/InterestForm';
import { UserPage } from '../pages/UserPage';
import { ExperienceDetails } from '../pages/ExperienceDetails';
import { ExperienceCreation } from '../pages/ExperienceCreation';
import { HomePage } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/form" component={InterestForm} />
        <Route exact path="/home" component={HomePage} />
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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
