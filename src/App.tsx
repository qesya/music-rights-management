import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import CompositionList from './components/CompositionList/CompositionList';
import SearchBar from './components/SearchBar/SearchBar';
import { Composition } from './types/Composition';
import { APIClient } from './api/search';
import './App.scss';

const compositions = require('./compositions.json').compositions as Composition[];

function App() {
	const [searchText, setSearchText] = useState('');
	const [filtered, setFiltered] = useState(compositions);

	const onSearch = useCallback(
		debounce((searchText) => {
			setFiltered(APIClient.searchMusic(searchText));
		}, 500),
		[]
	);

	const onSearchText = (text: string) => {
		setSearchText(text);
		if (text) {
			onSearch(text);
		} else {
			setFiltered(compositions);
		}
	};

	return (
		<div className='App'>
			<div className='container'>
				<SearchBar setSearchText={onSearchText} searchText={searchText} />
				<CompositionList compositions={filtered} />
			</div>
		</div>
	);
}

export default App;
