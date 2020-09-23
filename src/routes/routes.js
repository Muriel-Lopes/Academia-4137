import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import de páginas
import  {Alfa}  from '../pages/Alfa';
import  {Bravo}  from '../pages/Bravo';
import  {Charlie}  from '../pages/Charlie';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu" headerTitleAlign='left'>
                <Stack.Screen name="Alfa" component ={Alfa} />
                <Stack.Screen name="Bravo" component ={Bravo} />
                <Stack.Screen name="Charlie" component ={Charlie} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};

// <Stack.Screen name="Alfa" component ={Alfa} />