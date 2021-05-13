import styled from 'styled-components/native';
import {TextPrincipal, TextSecundario} from '../../../../../components/Text';

type IProdutoHasBenAdded = {
    hasBenAdded: boolean;
};

export const Container = styled.TouchableHighlight<IProdutoHasBenAdded>`
    width: 100%;
    background-color: white;
    flex-direction: row;

    padding: 8px 20px;
    opacity: ${(props) => (props.hasBenAdded ? 0.6 : 1)};
`;

export const WrapperProduct = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);
`;

export const WrapperProductImage = styled.View`
    min-width: 70px;
    min-height: 70px;
    /* flex: 1; */
    width: 20%;
`;

export const WrapperProductInfo = styled.View`
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
`;

export const TextPrice = styled(TextPrincipal)`
    color: #21c25e;
    font-size: 18px;
`;

export const TextProductName = styled(TextPrincipal)`
    color: #343434;
    font-size: 18px;
`;

export const WrapperProductPrice = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
`;
