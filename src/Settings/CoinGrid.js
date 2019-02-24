import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;

const getLowerCoins = (coinList, filteredCoins) => {
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
}

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
    return topSection ? favorites: getLowerCoins(coinList, filteredCoins);
}

const CoinGrid = ({topSection}) => {
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filteredCoins}) => {
                return (
                    <CoinGridStyled>
                        {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => {
                            return (
                                <CoinTile topSection={topSection} coinKey={coinKey} />
                            );
                        })}
                    </CoinGridStyled>
                );
            }}
        </AppContext.Consumer>
    );
}

export default CoinGrid;