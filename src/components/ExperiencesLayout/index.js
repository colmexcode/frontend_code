// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';

// ------------------------------ import styles and images
import { MainStyled } from './styles';


// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ExperiencesLayout = () => {
	return (
		<MainStyled>
			<ExperienceCard  position={1} />
			<ExperienceCard  position={2} />
			<ExperienceCard  position={3} />
			<ExperienceCard  position={4} />
			<ExperienceCard  position={5} />
			<ExperienceCard  position={6} />
			<ExperienceCard  position={7} />
			<ExperienceCard  position={8} />
			<ExperienceCard  position={9} />
			<ExperienceCard  position={10} />
		</MainStyled>
	);
};

