import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash3 from './splashscreen3.js';
import Splash2 from './splashscreen2.js';
import Splash1 from './splashscreen1.js';
import Splash0 from './splashscreen0.js';

const RootTab = createBottomTabNavigator();

const RootTabScreen = () => (
    <RootTab.Navigator>
        <RootTab.Screen name="Splash0" component={Splash0}/>
        <RootTab.Screen name="Splash1" component={Splash1}/>
        <RootTab.Screen name="Splash2" component={Splash2}/>
        <RootTab.Screen name="Splash3" component={Splash3}/>
    </RootTab.Navigator>
);

export default RootTabScreen;