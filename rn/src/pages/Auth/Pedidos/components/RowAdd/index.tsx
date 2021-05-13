import React from 'react';
import {Image, ToastAndroid} from 'react-native';
import {IProduto} from '../../../../../hooks/produto/IProduto';

import {
    Container,
    WrapperProductImage,
    WrapperProductInfo,
    WrapperProduct,
    TextPrice,
    TextProductName,
    WrapperProductPrice,
} from './styles';

type INewProductProps = {
    data: IProduto;
    handleAddProduct: (data: {
        pro_codigo: number;
        type: 'add' | 'remove';
    }) => void;
};

const RowAdd: React.FC<INewProductProps> = ({data, handleAddProduct}) => {
    const [isAdd, add] = React.useState<boolean>(false);
    const {estoque, fotos, pro_codigo, pro_descricao, valor} = data;

    const priceProduct = React.useMemo(() => {
        const formater = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return formater.format(valor);
    }, [valor]);

    const _handleAddProduct = React.useCallback(() => {
        if (estoque <= 0) {
            ToastAndroid.showWithGravity(
                'Produto sem estoque',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
            return;
        }
        add((oldProd) => {
            if (oldProd) {
                handleAddProduct({
                    pro_codigo,
                    type: 'remove',
                });
            } else {
                handleAddProduct({
                    pro_codigo,
                    type: 'add',
                });
            }

            return !oldProd;
        });
    }, [estoque, handleAddProduct, pro_codigo]);

    React.useEffect(() => {
        if (estoque <= 0) {
            add(false);
        }
    }, [estoque]);

    return (
        <Container onPress={_handleAddProduct} hasBenAdded={isAdd}>
            <WrapperProduct>
                <WrapperProductImage>
                    <Image
                        source={{uri: fotos[0]}}
                        style={{flex: 1}}
                        resizeMode="center"
                    />
                </WrapperProductImage>
                <WrapperProductInfo>
                    <TextProductName>{pro_descricao}</TextProductName>
                    <WrapperProductPrice>
                        <TextPrice>{priceProduct}</TextPrice>
                    </WrapperProductPrice>
                </WrapperProductInfo>
            </WrapperProduct>
        </Container>
    );
};

export default React.memo(RowAdd);
