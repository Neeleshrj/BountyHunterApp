import 'react-native-gesture-handler'; 
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/rootstackscreens.js';
import RootTabScreen from './screens/rootabscreens.js';

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootTabScreen /> */}
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
