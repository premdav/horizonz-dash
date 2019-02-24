import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid #3C4564;
    height: 25px;
    align-self: center;
    color: #FF6978;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // Get coin symbols
    let coinSymbols = Object.keys(coinList);
    // Get coin names, map symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey,) || _.includes(fuzzyResults, coinName));
    });
    console.log(filteredCoins);
    setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
}

const Search = () => {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) =>
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
                </SearchGrid>
            }
        </AppContext.Consumer>
        
    );
}

export default Search;