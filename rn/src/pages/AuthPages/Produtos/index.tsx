import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

const HeaderOfProduct: React.FC = () => {
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
                    <TouchableHighlight onPress={() => console.log('press 1')}>
                        <MaterialIcons
                            name="view-module"
                            size={24}
                            color="grey"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => console.log('press 2')}>
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

const Produtos: React.FC = () => {
    return (
        <Container>
            <HeaderOfProduct />
            <WrapperProduct>
                <WrapperProductImage>
                    <Text>imagem</Text>
                </WrapperProductImage>
                <WrapperProductInfo>
                    <Text>Product info</Text>
                </WrapperProductInfo>
            </WrapperProduct>
        </Container>
    );
};

export default Produtos;
