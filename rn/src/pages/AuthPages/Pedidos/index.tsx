import React from 'react';
import {View, Text} from 'react-native';
import {FAB} from 'react-native-paper';

// import { Container } from './styles';

const Config: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FAB.Group
                open={open}
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
                onStateChange={() => setOpen((oldState) => !oldState)}
                onPress={() => console.log('asdf')}
            />
            <Text>Pedidos</Text>
        </View>
    );
};

export default Config;
