// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// ------------------------------ import styles and images
import { Styled404, Section, Description } from './styles';
import { Button } from '../../global-styles/Buttons';

// ------------------------------------ COMPONENT ------------------------------------//
// this page is rendered when the route does not exist.

export default () => {
  return (
    <Styled404>
      <Header />
      <Section>
        <h1>404</h1>
        <Description>
          <p>Oops!</p>
          <p>Seems like you can't land here</p>
          <div>
            <Button main>Go Home</Button>
            <Button>About Us</Button>
          </div>
        </Description>
      </Section>
      {/* <Footer /> */}
    </Styled404>
  );
};
