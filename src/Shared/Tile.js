import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, redBoxShadow, whiteBoxShadow } from './Styles';

export const Tile = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
`;

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${whiteBoxShadow}
    }
`;

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        cursor: pointer;
        ${redBoxShadow}
    }
`;

export const DisabledTile = styled(Tile)`
    pointer-events: none;
    opacity: 0.4;
`;