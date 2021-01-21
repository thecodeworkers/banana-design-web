import React from 'react';
import { Featured, FeaturedTwo } from '../../screens';
import { dataOne, dataTwo, dataThree, dataFour, dataFive } from '../../../assets/data';

const AllFeatured = () => (
	<>
		<FeaturedTwo
			imageDescription={dataOne.imageDescription}
			date={dataOne.date}
			keywords={dataOne.keywords}
			title={dataOne.title}
			number={dataOne.number}
			description={dataOne.description}
			image={dataOne.image}
			transition={true}
		/>
		<Featured
			imageDescription={dataTwo.imageDescription}
			date={dataTwo.date}
			keywords={dataTwo.keywords}
			title={dataTwo.title}
			subtitle={dataTwo.subtitle}
			number={dataTwo.number}
			description={dataTwo.description}
			image={dataTwo.image}
		/>
		<FeaturedTwo
			imageDescription={dataThree.imageDescription}
			date={dataThree.date}
			keywords={dataThree.keywords}
			title={dataThree.title}
			number={dataThree.number}
			description={dataThree.description}
			image={dataThree.image}
		/>
		<Featured
			imageDescription={dataFour.imageDescription}
			date={dataFour.date}
			keywords={dataFour.keywords}
			title={dataFour.title}
			subtitle={dataFour.subtitle}
			number={dataFour.number}
			description={dataFour.description}
			image={dataFour.image}
		/>
		<FeaturedTwo
			imageDescription={dataFive.imageDescription}
			date={dataFive.date}
			keywords={dataFive.keywords}
			title={dataFive.title}
			number={dataFive.number}
			description={dataFive.description}
			image={dataFive.image}
		/>
	</>
);

export default AllFeatured;
