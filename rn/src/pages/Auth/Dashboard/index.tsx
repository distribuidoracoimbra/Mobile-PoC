import {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface DashboardProps {
    children: ReactNode;
}

export const Dashboard = ({children}: DashboardProps) => {
    return (
        <Container>
            <Text>Dashboard</Text>
            {children}
        </Container>
    );
};

export default Dashboard;
