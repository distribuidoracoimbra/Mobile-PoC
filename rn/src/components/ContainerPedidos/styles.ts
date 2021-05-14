import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 5px 15px;
`;

export const ConatinerInfoPedido = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 15px 0;
    border-bottom-width: 1px;
    border-bottom-color: solid rgba(0, 0, 0, 0.19);
`;

export const WrapperDataPedido = styled.View`
    margin-top: 10px;
    width: 100%;
    align-items: flex-start;
`;

export const TextSecundario = styled.Text`
    font-weight: 300;
    font-size: 13px;
    color: #4f4f4f;
`;

export const TextPrincipal = styled.Text`
    font-weight: 700;
    font-size: 18px;
    color: #4f4f4f;
`;

export const WrapperPedidoInfo = styled.View`
    width: 70%;
    align-items: flex-start;
    padding: 0 10px;
`;

export const WrapperClienteDistancia = styled.View`
    width: 15%;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

export const WrapperPinDistancia = styled.View`
    background-color: #fddc3f;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    padding: 3px;
`;

export const WrapperTotalDoPedido = styled.View`
    width: auto;
    align-items: center;
    justify-content: center;
`;
