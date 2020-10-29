// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { HostCard } from '../HostCard';
import { HostTravel } from '../HostTravel';
import { Reviews } from '../Reviews';

// ------------------------------ import styles and images
import { BlockExp, DescriptionExp, DetailsHost } from './style';

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceHost = () => {
  const current = useSelector(
    (state) => state.experiencesReducer.current,
  );

  const {
    title,
    description,
    location,
    duration,
    tags,
    rating,
    user,
  } = current;

  return (
    <BlockExp>
      <h2>{title}</h2>
      <DescriptionExp>
        <DetailsHost>
          <HostCard
            name={user ? user[0].fullname : null}
            rating={rating ? rating[0] : null}
          />
          <div>
            <h3>What you will do</h3>
            <p>{description}</p>
          </div>
        </DetailsHost>
        <article>
          <HostTravel
            location={location}
            duration={duration}
            tag={tags ? tags[0] : null}
          />
        </article>
      </DescriptionExp>
      <Reviews />
    </BlockExp>
  );
};
