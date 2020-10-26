// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { Selector } from './styles';

// -------- import redux actions
import { setSelection } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const SectionSelector = () => {
  const dispatch = useDispatch();
  return (
    <Selector>
      <h3
        tabIndex="0"
        onClick={() => dispatch(setSelection('my experiences'))}
      >
        My experiences
      </h3>
      <h3
        tabIndex="0"
        onClick={() => dispatch(setSelection('Favorites'))}
      >
        Favorites
      </h3>
    </Selector>
  );
};
