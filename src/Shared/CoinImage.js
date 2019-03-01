import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
    height: 50px;
    ${props => props.spotlight && css`
        height: 200px;
        display: block;
        margin: auto;
    `}
`;

const CoinImage = ({coin, spotlight}) => {
    return (
        <Image 
        spotlight={spotlight}
        alt={coin.Symbol}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
        />
    );
}

export default CoinImage;