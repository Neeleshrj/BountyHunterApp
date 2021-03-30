import 'react-native-gesture-handler'; 
import React from 'react';
// import Dashboard from './screens/dashboard.js';
// import SignIn from './screens/signin.js';
// import SignUp from './screens/signup.js';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/rootstackscreens.js';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
