import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Catbyte from './pages/Catbyte';

const Catbyte_ = 'Catbyte ';


const Stack = createNativeStackNavigator();

function App() {


    return(
       <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} > 
            <Stack.Screen name={Catbyte_} component={Catbyte} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;