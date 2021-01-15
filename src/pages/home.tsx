import React, {useState, useEffect} from "react";
import { Menu, NavBar, VerticalBreadcrumb } from "../components";
import { Featured, FeaturedTwo, Welcome } from '../screens';
import { bigCursor, smallCursor, whiteCursor, smallWhiteCursor } from '../utils/cursor';
import { dataOne, dataTwo, dataThree, dataFour, dataFive } from '../../assets/data';
import { rgb2hex } from '../utils/hexadecimal';

const Home = () => {

	const [cursor, setCursor] = useState(1);

	useEffect(() => {
		window.addEventListener('click', () => changeCursorStyles());
		window.addEventListener('mousemove', () => cursorColor());

		document.body.style.cursor = bigCursor;
		return () => {
			removeEventListener('click', () => changeCursorStyles())
			removeEventListener('mousemove', () => cursorColor());
		}
	}, [cursor]);

	const changeCursorStyles = () => {
		cursor === 1 ? document.body.style.cursor = smallCursor : document.body.style.cursor = smallWhiteCursor

		setTimeout(() => {
			cursor === 1 ? document.body.style.cursor = bigCursor : document.body.style.cursor = whiteCursor;
		}, 200);
	}

	const cursorColor = () => {
		const elements = document.querySelectorAll(':hover');
		const currentElement = elements.length - 1;
		const styles = getComputedStyle(elements[currentElement]);
		const background = styles.backgroundColor;

		if(rgb2hex(background) === '#000000' || rgb2hex(background) === '#2c292a' || rgb2hex(background) === '#323031') {
			document.body.style.cursor = whiteCursor;
			setCursor(2);
			return;
		}

		if(rgb2hex(background) == '#ffffff') {
			document.body.style.cursor = bigCursor;
			setCursor(1);
		}
	}

	return (
		<div >
			<NavBar />
			<Menu />
			<VerticalBreadcrumb />
			<Welcome />
			<FeaturedTwo
				imageDescription={dataOne.imageDescription}
				date={dataOne.date}
				keywords={dataOne.keywords}
				title={dataOne.title}
				number={dataOne.number}
				description={dataOne.description}
				image={dataOne.image}
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
		</div>
	)

}

export default Home

