import React from 'react';
import styled, { css } from 'styled-components';

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
    `};
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name, active}) => {
    return (
        <ControlButtonElement active={active}>
            {toProperCase(name)}
        </ControlButtonElement>
    );
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