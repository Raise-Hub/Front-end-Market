import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import Detail from './pages/Detail';
import News from './pages/News';
import Car from './pages/Car';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false}}>

                <AppStack.Screen name= "Login" component={Login} />
                <AppStack.Screen name= "Cadastro" component={Cadastro} />
                <AppStack.Screen name= "Feed" component={Feed} />
                <AppStack.Screen name= "Detail" component={Detail} />
                <AppStack.Screen name= "News" component={News} />
                <AppStack.Screen name= "Car" component={Car} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}