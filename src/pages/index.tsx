import React from "react";
import { Link } from "gatsby";
import {Menu , NavBar, VerticalBreadcrumb} from "../components";
import { Featured, FeaturedTwo, Welcome } from '../screens';

const IndexPage = () => (
	<div>
		<NavBar />
		<Welcome />
		<Menu />
		<VerticalBreadcrumb />

	</div>
)

export default IndexPage
