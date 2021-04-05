import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './signin';
import SignUp from './signup';
import SignUppass from './signuppass';
import Splash3 from './splashscreen3.js';
import Splash2 from './splashscreen2.js';
import Splash1 from './splashscreen1.js';
import Splash0 from './splashscreen0.js';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Splash0" component={Splash0} />
        <RootStack.Screen name="Splash1" component={Splash1} />
        <RootStack.Screen name="Splash2" component={Splash2} />
        <RootStack.Screen name="Splash3" component={Splash3} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="SignUppass" component={SignUppass} />
    </RootStack.Navigator>
);

export default RootStackScreen;