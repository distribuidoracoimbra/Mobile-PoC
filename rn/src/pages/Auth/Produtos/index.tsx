import React from 'react';
import {Text, FlatList, RefreshControl, View} from 'react-native';
import {useProduto} from '../../../hooks/produto';
import {IProduto} from '../../../hooks/produto/IProduto';

import RowProduto from './RowProduto';

import {Container} from './styles';

export const Produtos: React.FC = () => {
    const {produtos, atualizarPaginacao, paginacao} = useProduto();
    const [_refresing, _setRefresing] = React.useState(false);

    const handleRefresh = React.useCallback(() => {
        _setRefresing(true);

        console.log('carregando.....');

        _setRefresing(false);
    }, []);

    React.useEffect(() => {
        console.log(produtos.length);
    }, [produtos]);

    return (
        <Container>
            <Text>
                Produtos - FROM [{paginacao.from}] TO[{paginacao.to}]
            </Text>
            <FlatList<IProduto>
                data={produtos}
                keyExtractor={({pro_codigo}) => String(pro_codigo)}
                scrollsToTop
                refreshControl={
                    <RefreshControl
                        refreshing={_refresing}
                        onRefresh={handleRefresh}
                    />
                }
                initialNumToRender={15}
                maxToRenderPerBatch={15}
                onEndReachedThreshold={0.1}
                onEndReached={atualizarPaginacao}
                ListFooterComponent={() => (
                    <View
                        style={{
                            width: '100%',
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text> Isso é tudo pessoal </Text>
                    </View>
                )}
                renderItem={({item}) => <RowProduto item={item} />}
            />
        </Container>
    );
};

export default Produtos;
