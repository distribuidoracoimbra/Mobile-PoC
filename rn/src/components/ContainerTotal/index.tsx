import React from 'react';
import Intl from 'intl';

import {Container, WrapperTitle, Title, Total} from './styles';

interface IContainerTotal {
    total: number;
}

const ContainerTotal: React.FC<IContainerTotal> = ({total}) => {
    const totalFormatado = React.useMemo(() => {
        const formater = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return formater.format(total);
    }, [total]);
    return (
        <Container>
            <WrapperTitle>
                <Title>Total dos pedidos</Title>
            </WrapperTitle>
            <Total>{totalFormatado}</Total>
        </Container>
    );
};

export default React.memo(ContainerTotal);
