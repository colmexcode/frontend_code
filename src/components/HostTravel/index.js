// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons'
// ------------------------------ import styles and images
import { Card, Button } from './styles'
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const HostTravel = () => {
    return (
        <Card>
            <Icon type='location' />
            <p>Guadalajara</p>
            <Icon type='clock' />
            <p>30 mins</p>
            <Button>Adventure Travel</Button>
        </Card>
    )
}