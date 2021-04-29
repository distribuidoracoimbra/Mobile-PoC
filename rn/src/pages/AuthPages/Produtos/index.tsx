import React from 'react';
import {
    Text,
    TouchableHighlight,
    Image,
    FlatList,
    View,
    RefreshControl,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {products} from './produtos.json';
import {
    Container,
    HeaderContaienr,
    HeaderTitle,
    WrapperModalType,
    FixedHeaderContainer,
    ContainerPesquisaPedidos,
    InputPesquisaPedidos,
    WrapperProduct,
    WrapperProductImage,
    WrapperProductInfo,
    ProductName,
    ProductDetails,
    ProductPrice,
} from './styles';

const wait = (timeOut: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeOut));
};

enum ILayout {
    'ROW',
    'DETAILS',
}

interface IProduct {
    pro_codigo: number;
    pro_descricao: string;
    estoque: number;
    valor: number;
    fotos: string[];
}

type IWrapperProduct = {
    item: Omit<IProduct, 'pro_codigo'>;
    layout: ILayout;
};

type IActionChangeLayout = {
    changeLayout: (a: ILayout) => void;
};

const HeaderOfProduct: React.FC<IActionChangeLayout> = ({changeLayout}) => {
    const [containerFocused, setContainerFocused] = React.useState<boolean>(
        false,
    );

    return (
        <HeaderContaienr>
            <ContainerPesquisaPedidos focused={containerFocused}>
                <MaterialIcons name="search" size={24} color="grey" />
                <InputPesquisaPedidos
                    placeholder="Pesquisar um produto?"
                    onFocus={() => setContainerFocused(true)}
                    onBlur={() => setContainerFocused(false)}
                />
            </ContainerPesquisaPedidos>
            <FixedHeaderContainer>
                <HeaderTitle>Lista de produtos</HeaderTitle>
                <WrapperModalType>
                    <TouchableHighlight
                        onPress={() => changeLayout(ILayout.DETAILS)}>
                        <MaterialIcons
                            name="view-module"
                            size={24}
                            color="grey"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => changeLayout(ILayout.ROW)}>
                        <MaterialIcons
                            name="view-list"
                            size={24}
                            color="grey"
                        />
                    </TouchableHighlight>
                </WrapperModalType>
            </FixedHeaderContainer>
        </HeaderContaienr>
    );
};

const ProductList: React.FC<IWrapperProduct> = ({item, layout}) => {
    return (
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
                <ProductName>{item.pro_descricao}</ProductName>
                <ProductDetails>Entrega grátis</ProductDetails>
                <ProductPrice>R${item.valor}</ProductPrice>
            </WrapperProductInfo>
        </WrapperProduct>
    );
};

const Produtos: React.FC = () => {
    const [refreshing, setRefresing] = React.useState<boolean>(false);
    const [layout, setLayout] = React.useState<ILayout>(ILayout.ROW);

    const handleAlterLayout = React.useCallback((a: ILayout) => {
        setLayout(a);
    }, []);

    const refreshList = React.useCallback(() => {
        console.log('asdf');
        setRefresing(true);
        wait(2000).then(() => setRefresing(false));
    }, []);
    return (
        <Container>
            <HeaderOfProduct changeLayout={handleAlterLayout} />
            <FlatList<IProduct>
                data={products}
                keyExtractor={({pro_codigo}) => String(pro_codigo + 1)}
                scrollsToTop
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshList}
                    />
                }
                initialNumToRender={10}
                renderItem={({item}) => (
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <ProductList item={item} layout={layout} />
                    </View>
                )}
            />
        </Container>
    );
};

export default Produtos;
