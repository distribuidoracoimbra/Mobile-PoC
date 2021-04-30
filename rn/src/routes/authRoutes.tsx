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

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
    Clientes,
    Dashboard,
    Notificacoes,
    Pedidos,
    Produtos,
} from '../pages/Auth';

// import { Container } from './styles';
const AuthStack = createMaterialBottomTabNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen component={Dashboard} name="Dashboard" />
            <AuthStack.Screen component={Clientes} name="Clientes" />
            <AuthStack.Screen component={Notificacoes} name="Notificacoes" />
            <AuthStack.Screen component={Pedidos} name="Pedidos" />
            <AuthStack.Screen component={Produtos} name="Produtos" />
        </AuthStack.Navigator>
    );
};

export default React.memo(AuthRoutes);
