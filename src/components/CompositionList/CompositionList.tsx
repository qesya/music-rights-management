import React from 'react';
import { Composition as CompositionType } from '../../types/Composition';
import Composition from '../Composition/Composition';
import './CompositionList.scss';

type Props = {
	compositions: CompositionType[];
};

export default function CompositionList({ compositions }: Props) {
	return (
		<div className='composition-list'>
			{compositions.map((composition) => (
				<Composition composition={composition} />
			))}
		</div>
	);
}
