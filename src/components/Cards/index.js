// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { CardStyled } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Cards = ({ position }) => {
	return (
		<CardStyled  position={`home${position}`} ></CardStyled>
	);
};