import React from "react";
import { Link } from "gatsby";
import {Menu , NavBar, VerticalBreadcrumb} from "../components";
import { Featured, FeaturedTwo } from '../screens';

const IndexPage = () => (
	<div>
		<NavBar />
		<Menu />
		<VerticalBreadcrumb />
	</div>
)

export default IndexPage
