import React from 'react';
import { Composition as CompositionType } from '../../types/Composition';
import './Composition.scss';

type Props = {
	composition: CompositionType;
};

export default function Composition({ composition }: Props) {
	const date = new Date(composition.created).toUTCString().split(' ');
	const creationDate = `${date[1]} ${date[2]} ${date[3]}`;

	return (
		<div className='composition'>
			<h3 className='composition-title'>{composition.title}</h3>
			<span className='composition-title'>{creationDate}</span>
			<div className='composition-contributors'>
				{composition.contributors.map((contributor) => (
					<div key={contributor.id} className='composition-contributors-container'>
						<img
							alt={contributor.id}
							src={require('../../assets/user.jpeg')}
							className='composition-contributors-pic'
						/>
						<span>{contributor.roles.toString().replace(/,/g, ', ')}</span>
					</div>
				))}
			</div>
		</div>
	);
}
