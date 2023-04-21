import React from 'react';
import './SearchBar.scss';

type Props = {
	searchText: string;
	setSearchText: (searchText: string) => void;
};

export default function SearchBar({ searchText, setSearchText }: Props) {
	return (
		<div className='search-bar'>
			<input
				className=''
				type='text'
				placeholder='Search..'
				value={searchText}
				onChange={(e) => setSearchText(e.currentTarget.value)}></input>
		</div>
	);
}
