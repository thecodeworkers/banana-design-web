import React, {useState } from "react";
import './style.scss';
import verticalBreadcrumbProps from './interface'


const VerticalBreadcrumb: React.FC<verticalBreadcrumbProps> = ({ text }) => {

	const [isDark, setIsDark] = useState( true );

  return(

		<div className={`_breadCrumbContainer ${ isDark ? '_darkBreadcrumb' : '_lightBreadcrumb'}`}>
		<p className={'__breadCrumbtext'}>Menu</p>
	</div>
  )}

export default VerticalBreadcrumb;

