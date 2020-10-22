// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Cards } from '../Cards';

// ------------------------------ import styles and images
import { MainStyled } from './styles';
import homeImg1 from '../../assets/images/homeImg1.svg';


// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Main = () => {
	return (
		<MainStyled>
			<Cards position={1}
				src={homeImg1}
				alt="travel image # 1"
			/>
			<Cards  position={2} />
			<Cards  position={3} />
			<Cards  position={4} />
			<Cards  position={5} />
			<Cards  position={6} />
			<Cards  position={7} />
			<Cards  position={8} />
			<Cards  position={9} />
			<Cards  position={10} />
		</MainStyled>
	);
};