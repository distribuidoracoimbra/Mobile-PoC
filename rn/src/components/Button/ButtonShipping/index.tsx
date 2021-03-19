import React from 'react';
import {Text} from 'react-native';
import * as Animated from 'react-native-animatable';

import {Container, Button, ContainerOpacity, ContainerOfButton} from './styles';

const ButtonShipping: React.FC = () => {
    const NewAnimatedComponent = Animated.createAnimatableComponent(
        ContainerOpacity,
    );
    return (
        <Container
            onPress={() => console.log('asdf')}
            style={{
                elevation: 2,
            }}>
            <ContainerOfButton>
                <NewAnimatedComponent
                    animation={{
                        from: {
                            left: -20,
                            opacity: 1,
                        },
                        to: {
                            left: 56,
                            opacity: 0,
                        },
                    }}
                    easing="ease-in-out"
                    duration={700}
                    iterationDelay={3000}
                    iterationCount="infinite"
                />
                <Button
                    colors={['#3F45F9', '#0387FE']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={{color: 'white'}}>$</Text>
                </Button>
            </ContainerOfButton>
        </Container>
    );
};

export default React.memo(ButtonShipping);
