import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import { Menu, NavBar, VerticalBreadcrumb } from "../components";
import { Featured, FeaturedTwo } from '../screens';
import { bigCursor, smallCursor, whiteCursor, smallWhiteCursor } from '../utils/cursor';
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
		console.log(cursor)
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
			<div style={{ height: '100vh', backgroundColor: '#ffffff'}}></div>
			<Featured />
			<FeaturedTwo />

		</div>
	)

}

export default Home

