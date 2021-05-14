import React from 'react';
import {Text} from 'react-native';
// import FirebaseAuth from '@react-native-firebase/auth';

import {Container} from './styles';

export const Dashboard: React.FC = ({children}) => {
    // React.useEffect(() => {
    //     FirebaseAuth().signOut();
    // }, []);
    return (
        <Container>
            <Text>Dashboard</Text>
            {children}
        </Container>
    );
};

export default Dashboard;
