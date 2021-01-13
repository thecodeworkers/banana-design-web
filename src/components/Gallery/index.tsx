import React, { useState } from 'react';
import './style.scss';
import het from '../../../assets/images/team/portrait.jpg';
import gatsby from '../../../assets/images/gatsby-astronaut.png';

const Gallery = () => {

	const [image, setImage] = useState(null);

	let team = [
		{
			name: 'Andrea González',
			position: 'Co-founder / CEO & Art Director',
			img: het,
			otherimage: gatsby,
			activeImage: false,
			skills: [
				{
					title : 'All creative fields',
				},
				{
					circles: [
						'_yellowCircle',
						'_redCircle',
						'_purpleCircle'
					]
				}
			]
		},

		{
			name: 'Andrea González',
			position: 'Co-founder / CEO & Art Director',
			img: het,
			otherimage: gatsby,
			activeImage: false,
			skills: [
				{
					title : 'All creative fields',
				},
				{
					circles: [
						'_yellowCircle',
						'_redCircle',
						'_purpleCircle'
					]
				}
			]
		},

		{
			name: 'Andrea González',
			position: 'Co-founder / CEO & Art Director',
			img: het,
			otherimage: gatsby,
			activeImage: false,
			skills: [
				{
					title : 'All creative fields',
				},
				{
					circles: [
						'_yellowCircle',
						'_redCircle',
						'_purpleCircle'
					]
				}
			]
		},
	];

	const imageChange = (index) => {
		image == index ?setImage(null) : setImage(index);
	}

	return (
		<div className='_generalGallery'>

			{
				team.map((item, index) => {
					return (
						<div className='_teamPhoto'  onClick={() => imageChange(index)}>
							<div className='_teamDescription'>
								<ul className='_teamList'>
									<li> { item.name } </li>
									<li> { item.position } </li>
									<li className='_itemRow'> { item.skills[0].title }
										<div className='_circlesParent'>
												{
													item.skills[1].circles.map(skill => {
														return (<div className={skill}></div>)
													})
												}
										</div>
									</li>
								</ul>
							</div>
						</div>
					)
				})
			}
			{/* <div className='_teamPhoto'  style={{backgroundImage: `url(${require('../../../assets/images/team/portrait.jpg')})`}} >
				<div className='_teamDescription'>
					<ul className='_teamList'>
						<li>Andrea González </li>
						<li>Co-founder / CEO & Art Director </li>
						<li className='_itemRow'>All creative fields
							<div className='_circlesParent'>
								<div className='_yellowCircle'></div>
								<div className='_redCircle'></div>
								<div className='_purpleCircle'></div>
							</div>
						</li>
					</ul>
				</div>
			</div> */}

		</div>
	)
};

export default Gallery;

// style={{ backgroundImage: `url(${true ? item.img : item.otherimage})`}}
