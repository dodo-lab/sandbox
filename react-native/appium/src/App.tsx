import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation/RootStackNav';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};

export default App;
