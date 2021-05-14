import React from 'react';
import {Container, Titulo} from './styles';

interface ITituloPaginaProps {
    titulo: string;
}

const TituloPagina: React.FC<ITituloPaginaProps> = ({titulo}) => {
    return (
        <Container>
            <Titulo>{titulo}</Titulo>
        </Container>
    );
};

export default TituloPagina;
