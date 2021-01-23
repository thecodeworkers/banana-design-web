import React from 'react';
import { Welcome } from '../screens';
import { Gallery, Footer, NavBar, Menu} from '../components';

const AboutUs = () => {
	return (
		<>
		<NavBar />
		<Menu />
		<Welcome title='About us' />
		<Gallery />
		<Footer />
		</>
	)
};

export default AboutUs;
