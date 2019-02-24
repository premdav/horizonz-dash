import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;

const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => {
                return (
                    <CoinGridStyled>
                        {Object.keys(coinList).map(coinKey => {
                            return (
                                <SelectableTile>{coinKey}</SelectableTile>
                            );
                        })}
                    </CoinGridStyled>
                );
            }}
        </AppContext.Consumer>
    );
}

export default CoinGrid;