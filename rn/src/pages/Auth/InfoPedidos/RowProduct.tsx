import React from 'react';
import {Text} from 'react-native';

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

type IRowProduct = {
    pro_imagem?: string;
    pro_price: number;
    pro_quantidade: number;
};

interface IRowProductProps {
    data: Omit<Omit<IRowProduct, 'pedido_id'>, 'pro_codigo'>;
}

const RowProduct: React.FC<IRowProductProps> = ({data}) => {
    const {pro_imagem, pro_price, pro_quantidade} = data;

    const totalDoPedido = React.useMemo(
        () => Math.round(pro_price * pro_quantidade),
        [pro_price, pro_quantidade],
    );

    return (
        <WrapperProduct>
            <WrapperProductImage>
                <ProductImage source={{uri: pro_imagem}} resizeMode="center" />
            </WrapperProductImage>
            <WrapperProductInfo>
                <TextPrincipal>Tênis adidas Breaknet</TextPrincipal>
                <WrapperProcutTotal>
                    <Text>Total</Text>
                    <TextTotalPedido tipo="positivo">
                        {totalDoPedido}
                    </TextTotalPedido>
                </WrapperProcutTotal>
            </WrapperProductInfo>
            <WrapperProductPlus>
                <WrapperPlusButton>
                    <TextButton>+</TextButton>
                </WrapperPlusButton>
                <TextTotalPedido tipo="positivo">0</TextTotalPedido>
                <WrapperPlusButton>
                    <TextButton>-</TextButton>
                </WrapperPlusButton>
            </WrapperProductPlus>
        </WrapperProduct>
    );
};

export default React.memo(RowProduct);
