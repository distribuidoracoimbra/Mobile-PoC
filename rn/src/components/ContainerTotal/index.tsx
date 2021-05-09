import React from 'react';

import {Container, WrapperTitle, Title, Total} from './styles';

interface IContainerTotal {
    total: number;
}

const ContainerTotal: React.FC<IContainerTotal> = ({total}) => {
    return (
        <Container>
            <WrapperTitle>
                <Title>Total dos pedidos</Title>
            </WrapperTitle>
            <Total>R$ {total},00</Total>
        </Container>
    );
};

export default React.memo(ContainerTotal);
