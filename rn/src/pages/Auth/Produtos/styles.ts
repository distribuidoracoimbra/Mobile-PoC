import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`;

export const WrapperProduct = styled.View`
    width: 100%;
    /* background-color: red; */
    height: 20%;
    min-height: 100px;
    padding: 5px 20px 10px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
`;

export const WrapperProductImage = styled.View`
    width: 35%;
`;

export const WrapperProductInfo = styled.View`
    flex: 1;
    /* background-color: green; */
    padding-left: 10px;
    justify-content: center;
`;

export const ProductName = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const ProductDetails = styled.Text`
    font-size: 15px;
    font-weight: 400;
`;

export const ProductPrice = styled.Text`
    font-size: 14px;
    font-weight: 700;
`;
