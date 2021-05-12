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
    ButtonAddItem,
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
    addProduct?: (data: {pro_codigo: number; type: 'add' | 'remove'}) => void;
    typeOfRow: 'increment' | 'news';
}

const RowProduct: React.FC<IRowProductProps> = ({
    data,
    addProduct,
    typeOfRow,
}) => {
    const {
        pro_imagem,
        pro_price,
        pro_quantidade,
        pro_descricao,
        pro_codigo,
    } = data;

    const totalDoPedido = React.useMemo(
        () => Math.round(pro_price * pro_quantidade),
        [pro_price, pro_quantidade],
    );

    const handleAddProduct = React.useCallback(() => {
        if (!addProduct) {
            return;
        }

        addProduct({
            pro_codigo,
            type: 'add',
        });
    }, [addProduct, pro_codigo]);

    const handleDeleteProduct = React.useCallback(() => {
        if (!addProduct) {
            return;
        }

        addProduct({
            pro_codigo,
            type: 'remove',
        });
    }, [addProduct, pro_codigo]);

    const [addedProduct, setAddedProduct] = React.useState<boolean>(false);

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
                    <TextTotalPedido tipo="positivo">
                        {totalDoPedido}
                    </TextTotalPedido>
                </WrapperProcutTotal>
            </WrapperProductInfo>
            <WrapperProductPlus>
                {typeOfRow === 'increment' && (
                    <React.Fragment>
                        <WrapperPlusButton onPress={handleAddProduct}>
                            <TextButton>+</TextButton>
                        </WrapperPlusButton>
                        <TextTotalPedido tipo="positivo">
                            {pro_quantidade}
                        </TextTotalPedido>
                        <WrapperPlusButton onPress={handleDeleteProduct}>
                            <TextButton>-</TextButton>
                        </WrapperPlusButton>
                    </React.Fragment>
                )}
            </WrapperProductPlus>
        </WrapperProduct>
    );
};

export default React.memo(RowProduct);
