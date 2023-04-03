import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './MYCODE/navigation/Navigation';
import {ActivityIndicator, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
