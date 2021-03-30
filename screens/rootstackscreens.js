import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './signin';
import SignUp from './signup';
import SignUppass from './signuppass';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="SignUppass" component={SignUppass} />
    </RootStack.Navigator>
);

export default RootStackScreen;