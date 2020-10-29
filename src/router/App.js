// ------------------------------ import libraries
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

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

/* Constants */
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage';

/* hooks */
import useGetItemFromLocalStorage from '../hooks/useGetItemFromLocalStorage';
// import Home from '../pages/Home';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the router.
// This component has all the pages components

export const App = () => {
  // const token = useGetItemFromLocalStorage(TOKEN);
  const token = localStorage.getItem(TOKEN);
  const verdadero = true;
  const { id, email, username, iat } = JSON.parse(
    localStorage.getItem(VERIFY) || '{}',
  );
  console.log(token);

  console.log({ id, email, username, iat });

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {token ? <HomePage /> : <LandingPage />}
          </Route>
          <Route exact path="/form">
            {token ? <InterestForm /> : <LandingPage />}
          </Route>
          <Route exact path="/home">
            {token ? <HomePage /> : <LandingPage />}
          </Route>
          <Route exact path="/user">
            {token ? <UserPage /> : <LandingPage />}
          </Route>
          <Route exact path="/experience">
            {token ? <ExperienceDetails /> : <LandingPage />}
          </Route>
          <Route exact path="/create-experience">
            {token ? <ExperienceCreation /> : <LandingPage />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
