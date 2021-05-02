import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

export const Dashboard: React.FC = ({children}) => {
    return (
        <Container>
            <Text>Dashboard</Text>
            {children}
        </Container>
    );
};

export default Dashboard;
