import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
// import {useAuth} from '../../../hooks/auth';
// import { Container } from './styles';
import Realm from 'realm';
import realmSeila from '../../../infra/realm';

const Profile: React.FC = () => {
    React.useEffect(() => {}, []);

    const teste = async () => {
        console.log('entrando');
        try {
            // await aaaabb.emailPasswordAuth.registerUser(
            //     'delfio_teste@gmail.com',
            //     'aaabbbcc',
            // );

            const userTeste = Realm.Credentials.emailPassword(
                'delfio_teste@gmail.com',
                'aaabbbcc',
            );

            const userlogado = await realmSeila.logIn(userTeste);

            console.log(userlogado.accessToken);
        } catch (error) {
            console.error('deu erro irmão ', error);
        }
    };
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Button onPress={teste}>DESLOGAR</Button>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;
