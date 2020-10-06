import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Menu, NavBar, VerticalBreadcrumb } from "../components";
import { Featured, FeaturedTwo } from '../screens';
import { bigCursor, smallCursor } from '../utils/cursor';

const IndexPage = () => {

	useEffect(() => {
		window.addEventListener('click', () => changeCursorStyles());
		document.body.style.cursor = bigCursor;
		return () => {removeEventListener('click', () => changeCursorStyles())}
	}, []);

	const changeCursorStyles = () => {
		document.body.style.cursor = smallCursor;
		setTimeout(() => {
			document.body.style.cursor = bigCursor;
		}, 100);
	}

	return (
		<div>
			<NavBar />

			<Menu />
			<VerticalBreadcrumb />
			<div style={{ height: '100vh' }}></div>
			<Featured />
			<FeaturedTwo />

		</div>
	)

}

export default IndexPage
