// ------------------------------ import libraries
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ------------------------------ import components
import { LandingPage } from '../pages/Landing';

const HomePage = lazy(() => import('../pages/Home'));
const InterestForm = lazy(() => import('../pages/InterestForm'));
const UserPage = lazy(() => import('../pages/UserPage'));
const ExperienceDetails = lazy(() =>
  import('../pages/ExperienceDetails'),
);
const ExperienceCreation = lazy(() =>
  import('../pages/ExperienceCreation'),
);
const NotFound = lazy(() => import('../pages/NotFound'));

// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/form" component={InterestForm} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route
            exact
            path="/experience/:id"
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
    </Suspense>
  );
};
