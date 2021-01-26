import React, { useEffect, useRef } from "react";
import Home from './home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader } from '../components';

const IndexPage = ({ loader }) => {
	return (
		<Loader>
			<Home />
		</Loader>
	)
}

const mapStateToProps = ({ loader }) => ({ loader });

const mapDispatchToProps = dispatch => {
	const actions = {
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);


