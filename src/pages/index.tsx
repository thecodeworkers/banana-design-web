import React from "react";
import { Link } from "gatsby";
import {Menu , NavBar, VerticalBreadcrumb} from "../components";
import { Featured, FeaturedTwo } from '../screens';

const IndexPage = () => (
	<div>
		<NavBar />

		<Menu />
		<VerticalBreadcrumb />
    <div style={{height: "100vh", backgroundColor: "#ffffff"}} ></div>
    <div style={{height: "100vh", backgroundColor: "#444444"}} ></div>
    <div style={{height: "100vh", backgroundColor: "#ffffff"}} ></div>
	</div>
)

export default IndexPage
