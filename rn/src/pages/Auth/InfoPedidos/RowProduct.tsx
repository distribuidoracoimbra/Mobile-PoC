import React from 'react';
import {Text} from 'react-native';
import {IProdutoDoPedido} from '../../../../domain/produtos-de-um-pedidos';

import {TextPrincipal} from '../../../components/Text';

import {
    WrapperPlusButton,
    WrapperProduct,
    WrapperProductImage,
    ProductImage,
    WrapperProductInfo,
    WrapperProcutTotal,
    WrapperProductPlus,
    TextButton,
    TextTotalPedido,
} from './styles';

type IRowProduct = IProdutoDoPedido;

interface IRowProductProps {
    data: IRowProduct;
}

const RowProduct: React.FC<IRowProductProps> = ({data}) => {
    return (
        <WrapperProduct>
            <WrapperProductImage>
                <ProductImage
                    source={{uri: data.produto?.fotos[0]}}
                    resizeMode="center"
                />
            </WrapperProductImage>
            <WrapperProductInfo>
                <TextPrincipal>Tênis adidas Breaknet</TextPrincipal>
                <WrapperProcutTotal>
                    <Text>Total</Text>
                    <TextTotalPedido>250</TextTotalPedido>
                </WrapperProcutTotal>
            </WrapperProductInfo>
            <WrapperProductPlus>
                <WrapperPlusButton>
                    <TextButton>+</TextButton>
                </WrapperPlusButton>
                <TextTotalPedido>0</TextTotalPedido>
                <WrapperPlusButton>
                    <TextButton>-</TextButton>
                </WrapperPlusButton>
            </WrapperProductPlus>
        </WrapperProduct>
    );
};

export default React.memo(RowProduct);
