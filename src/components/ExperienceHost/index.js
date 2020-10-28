// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { HostCard } from '../HostCard';
import { HostTravel } from '../HostTravel';
import { Reviews } from '../Reviews';

// ------------------------------ import styles and images
import { BlockExp, DescriptionExp, DetailsHost } from './style';

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceHost = () => {
  return (
    <BlockExp>
      <h2>Name of the experiencie</h2>
      <DescriptionExp>
        <DetailsHost>
          <HostCard />
          <div>
            <h3>What you will do</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Velit facilis a perspiciatis, optio ratione
              repudiandae perferendis corporis ipsam soluta nihil nam
              possimus dolorem, odio blanditiis aperiam beatae nulla
              aspernatur culpa. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Velit facilis a perspiciatis, optio ratione
              repudiandae perferendis corporis ipsam soluta nihil nam
              possimus dolorem, odio blanditiis aperiam beatae nulla
              aspernatur culpa. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Velit facilis a perspiciatis, optio ratione
              repudiandae perferendis corporis ipsam soluta nihil nam
              possimus dolorem, odio blanditiis aperiam beatae nulla
              aspernatur culpa. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </DetailsHost>
        <article>
          <HostTravel />
        </article>
      </DescriptionExp>
      <Reviews />
    </BlockExp>
  );
};
