import React from 'react';
import {Image, View} from 'react-native';
import {IProduto} from '../../../hooks/produto/IProduto';

import {
    ProductDetails,
    ProductName,
    ProductPrice,
    WrapperProduct,
    WrapperProductImage,
    WrapperProductInfo,
} from './styles';

type IWrapperProduct = {
    item: IProduto;
};

const RowProduto: React.FC<IWrapperProduct> = ({item}) => {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <WrapperProduct>
                <WrapperProductImage>
                    <Image
                        source={{uri: item.fotos[1]}}
                        resizeMode="center"
                        style={{
                            flex: 1,
                        }}
                    />
                </WrapperProductImage>
                <WrapperProductInfo>
                    <ProductName>
                        {item.pro_descricao} - {item.pro_codigo}
                    </ProductName>
                    <ProductDetails>Entrega grátis !</ProductDetails>
                    <ProductPrice>R$ {item.valor}</ProductPrice>
                </WrapperProductInfo>
            </WrapperProduct>
        </View>
    );
};

export default React.memo(RowProduto);
