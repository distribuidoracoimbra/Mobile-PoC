import React from 'react';
import {Container, TextButton, ContainerGradiente} from './styles';
import {ButtonProps} from 'react-native';

const DefaultButton: React.FC<ButtonProps> = ({title, onPress}) => {
    return (
        <Container
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                elevation: 2,
            }}>
            <ContainerGradiente
                colors={['#3F45F9', '#0387FE']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <TextButton>{title}</TextButton>
            </ContainerGradiente>
        </Container>
    );
};

export default DefaultButton;
