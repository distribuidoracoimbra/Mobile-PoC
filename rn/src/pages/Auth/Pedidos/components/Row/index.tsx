import React from 'react';
import {Text} from 'react-native';
import {TextPrincipal} from '../../../../../components/Text';

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
    pro_codigo: number;
    pro_descricao: string;
};

interface IRowProductProps {
    data: IRowProduct;
    dealWithChangesInQuantities?: (data: {
        pro_codigo: number;
        type: 'add' | 'remove';
        total: number;
    }) => void;
}

const RowProduct: React.FC<IRowProductProps> = ({
    data,
    dealWithChangesInQuantities,
}) => {
    const {
        pro_imagem,
        pro_price,
        pro_quantidade,
        pro_descricao,
        pro_codigo,
    } = data;

    const [total, increment] = React.useState(0);

    const totalDoPedido = React.useMemo(
        () => Math.round(pro_price * pro_quantidade),
        [pro_price, pro_quantidade],
    );

    const handleAddProduct = React.useCallback(() => {
        increment((old) => old + 1);
        if (!dealWithChangesInQuantities) {
            return;
        }

        dealWithChangesInQuantities({
            pro_codigo,
            type: 'add',
            total,
        });
    }, [dealWithChangesInQuantities, pro_codigo, total]);

    const handleDeleteProduct = React.useCallback(() => {
        increment((old) => {
            const newTotal = old - 1;
            if (!dealWithChangesInQuantities) {
                return newTotal;
            }

            dealWithChangesInQuantities({
                pro_codigo,
                type: 'remove',
                total: newTotal,
            });

            return newTotal;
        });
    }, [dealWithChangesInQuantities, pro_codigo]);

    return (
        <WrapperProduct>
            <WrapperProductImage>
                <ProductImage source={{uri: pro_imagem}} resizeMode="center" />
            </WrapperProductImage>
            <WrapperProductInfo>
                <TextPrincipal>
                    {pro_descricao ? pro_descricao : 'Tênis adidas Breaknet'}
                </TextPrincipal>
                <WrapperProcutTotal>
                    <Text>Total</Text>
                    <TextTotalPedido type="positivo">
                        {totalDoPedido}
                    </TextTotalPedido>
                </WrapperProcutTotal>
            </WrapperProductInfo>
            <WrapperProductPlus>
                <WrapperPlusButton onPress={handleAddProduct}>
                    <TextButton>+</TextButton>
                </WrapperPlusButton>
                <TextTotalPedido type="positivo">
                    {pro_quantidade}
                </TextTotalPedido>
                <WrapperPlusButton onPress={handleDeleteProduct}>
                    <TextButton>-</TextButton>
                </WrapperPlusButton>
            </WrapperProductPlus>
        </WrapperProduct>
    );
};

export default React.memo(RowProduct);
