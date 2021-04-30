// Copyright 2021 delfi
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
    flex: 1;
    padding: 0 25px 0;

    justify-content: center;
    background-color: white;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ContainerText = styled.View`
    margin-bottom: 15px;
`;

export const TextPrincipal = styled.Text`
    color: #1d2226;
    font-weight: bold;
    font-size: 25px;
`;

export const TextSecundario = styled.Text`
    color: #a0a3a4;
    font-size: 15px;
    font-weight: 300;
`;

export const ContainerInput = styled.View`
    width: 100%;
    margin-bottom: 35px;
`;

export const InputContainer = styled.View`
    width: 100%;
    margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

export const ButtonLogin = styled.TouchableHighlight`
    background-color: #224bfb;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    height: 50px;
`;

export const ContainerButton = styled.View`
    flex-direction: column;
`;
