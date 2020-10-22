// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { CardStyled, HomeImage, TitleCard } from './styles';
import homeImg1 from '../../assets/images/homeImg1.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Cards = ({ position }) => {
	return (
		<CardStyled  position={`home${position}`} >
			<HomeImage 
				src={ homeImg1 } 
				alt="travel image #1"
			/>
			<TitleCard>Texto de prueba</TitleCard>
		</CardStyled>
	);
};