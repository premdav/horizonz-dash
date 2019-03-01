import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElement = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 2px;
    ${props => props.active && css`
        border: 1px solid #697597;
    `}
    ${props => props.hidden && css`
        display: none
    `}
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
    return (
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControlButtonElement
                 active={page === name}
                 onClick={() => setPage(name)}
                 hidden={firstVisit && name === 'dashboard'}
                 >
                    {toProperCase(name)}
                </ControlButtonElement>
            )}
        </AppContext.Consumer>
    )
}

const Navigation = () => {
    return (
        <Bar>
            <Logo>Horizonz</Logo>
            <div></div>
            <ControlButton active name="dashboard" />
            <ControlButton name="settings" />
        </Bar>
    );
}

export default Navigation;