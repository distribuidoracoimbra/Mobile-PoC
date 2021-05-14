import styled from 'styled-components/native';
import RowContainer from '../../../../../components/ContainerRowDefault';
import {TextSecundario, TextPrincipal} from '../../../../../components/Text';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const WrapperTitleCard = styled.TouchableOpacity`
    width: 100%;
    min-height: 50px;
    /* height: 20%; */

    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const TitleAddToCart = styled(TextPrincipal)`
    font-weight: 500;
    font-size: 18px;
    color: #434750;
`;
