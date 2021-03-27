import React from 'react';
import {Text, Keyboard} from 'react-native';
import {FAB} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    ContainerHeader,
    NameHeader,
    ContainerPesquisaPedidos,
    InputPesquisaPedidos,
    Container,
} from './styles';

const Header: React.FC = () => {
    const [containerFocused, setContainerFocused] = React.useState(false);
    return (
        <ContainerHeader>
            <NameHeader>Olá @Delfio Francisco</NameHeader>
            <ContainerPesquisaPedidos focused={containerFocused}>
                <MaterialIcons name="search" size={24} color="grey" />
                <InputPesquisaPedidos
                    placeholder="qual pedido deseja pesquisar?"
                    onFocus={() => setContainerFocused(true)}
                    onBlur={() => setContainerFocused(false)}
                />
            </ContainerPesquisaPedidos>
        </ContainerHeader>
    );
};

const Config: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [fabVisible, setFabVisible] = React.useState(true);

    React.useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => setFabVisible(false));
        Keyboard.addListener('keyboardDidHide', () => setFabVisible(true));

        return () => {
            Keyboard.removeAllListeners('keyboardDidHide');
            Keyboard.removeAllListeners('keyboardDidShow');
        };
    }, []);

    return (
        <Container>
            <FAB.Group
                open={open}
                visible={fabVisible}
                icon="plus"
                color="#fff"
                fabStyle={{
                    backgroundColor: '#141432',
                }}
                actions={[
                    {icon: 'plus', onPress: () => console.log('Pressed add')},
                    {
                        icon: 'star',
                        label: 'Star',
                        onPress: () => console.log('Pressed star'),
                    },
                    {
                        icon: 'email',
                        label: 'Email',
                        onPress: () => console.log('Pressed email'),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => console.log('Pressed notifications'),
                        small: false,
                    },
                ]}
                onStateChange={() => setOpen((oldState: boolean) => !oldState)}
            />
            <Header />
            <Text>Pedidos</Text>
        </Container>
    );
};

export default Config;
