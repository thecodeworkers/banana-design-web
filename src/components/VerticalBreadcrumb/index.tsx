import React, { useState, useEffect } from "react";
import './style.scss';
import verticalBreadcrumbProps from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap } from 'gsap/all';


const VerticalBreadcrumb: React.FC<verticalBreadcrumbProps> = ({ breadcrumb }) => {

	const { text, color } = breadcrumb;
	const tl = gsap.timeline();

	useEffect(() => {
		tl.play();
		tl.to('.__breadCrumbtext', 1, { color });
	}, [breadcrumb])

	return (
		<div className='_breadCrumbContainer'>
			<p className='__breadCrumbtext'>{text}</p>
		</div>
	)
}

const mapStateToProps = ({ breadcrumb }) => ({ breadcrumb });

const mapDispatchToProps = dispatch => {
	const actions = {
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalBreadcrumb);



