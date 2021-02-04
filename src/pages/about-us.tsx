import React from 'react';
import { Welcome } from '../screens';
import { Gallery, Footer, NavBar, Menu} from '../components';

const AboutUs = () => {
	return (
		<>
		<NavBar colorChange={false}/>
		<Menu />
		<Welcome title='About us' component={false}/>
		<Gallery />
		<Footer />
		</>
	)
};

export default AboutUs;
