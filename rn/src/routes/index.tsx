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
import {NavigationContainer} from '@react-navigation/native';
import RotasIniciais from './InitialRoutes';
// import AuthRoutes from './AuthRoutes';
import {useAuth} from '../hooks/auth';

const Routes: React.FC = () => {
    const {user} = useAuth();
    // const usuarioLogado = !!user.user_id;
    console.log(`usuário ${user.user_email}`);
    return (
        <NavigationContainer>
            <RotasIniciais />
        </NavigationContainer>
    );
};

export default Routes;
