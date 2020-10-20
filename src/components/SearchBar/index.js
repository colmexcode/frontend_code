// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images

// ------------------------------------ COMPONENT ------------------------------------//
// this component search the experiences
export const SearchBar = () => {
  return (
    <>
      <p> explore and travel </p>
      <section>
        <div>
          <input type="text" name="" placeholder="Location" />
          <Icon type="search" />
        </div>
      </section>
    </>
  );
};
