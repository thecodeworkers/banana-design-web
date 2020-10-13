import React, { useEffect, useRef} from "react";
import Home from './home';
import { Loader } from '../components';

const IndexPage = () => (
	<Loader>
		<Home />
	</Loader>
)

export default IndexPage

