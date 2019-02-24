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