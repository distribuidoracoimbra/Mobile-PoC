import React from 'react';
import {Text} from 'react-native';
import LottieView from 'lottie-react-native';

import {Container, ContainerOfText, ContainerOfButton} from './styles';

interface IButtonShippingProps {
    action: () => void;
}

const ButtonShipping: React.FC<IButtonShippingProps> = ({action}) => {
    return (
        <Container
            onPress={action}
            style={{
                elevation: 2,
            }}>
            <ContainerOfButton>
                <LottieView
                    autoSize
                    resizeMode="center"
                    renderMode="HARDWARE"
                    source={require('../../../../assets/animation/button-animation.json')}
                    cacheStrategy="strong"
                    hardwareAccelerationAndroid
                    autoPlay
                    loop
                    style={{
                        display: 'flex',
                        flex: 1,
                    }}
                />
                <ContainerOfText>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                        $
                    </Text>
                </ContainerOfText>
            </ContainerOfButton>
        </Container>
    );
};

export default React.memo(ButtonShipping);
