import React from "react";
import { Link } from "gatsby";
import {Menu , Product, NavBar} from "../components";
import { Featured, FeaturedTwo } from '../screens';

const IndexPage = () => (
<div>
<NavBar />
{/* <Product /> */}
{/* <Menu /> */}
<Featured />
<FeaturedTwo />

</div>
)

export default IndexPage
