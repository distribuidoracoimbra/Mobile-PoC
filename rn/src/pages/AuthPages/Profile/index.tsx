import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth} from '../../../hooks/auth';
// import { Container } from './styles';

const Profile: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Button onPress={signOut}>DESLOGAR</Button>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;
