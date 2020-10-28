// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Card } from './styles';
import { Button } from '../../global-styles/Buttons';

// ------------------------------------ COMPONENT ------------------------------------//

export const HostTravel = () => {
  return (
    <Card>
      <div>
        <Icon type="location" />
        <p>Guadalajara</p>
      </div>
      <div>
        <Icon type="clock" />
        <p>30 mins</p>
      </div>
      <Button>Adventure Travel</Button>
    </Card>
  );
};
