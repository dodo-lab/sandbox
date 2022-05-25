/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

let globalValue = 0;

const App = () => {
  const [stateValue, setStateValue] = useState(0);

  useEffect(() => {
    console.log('mount.');
    return () => console.log('unmount.');
  }, []);

  return (
    <SafeAreaView>
      <Text>stateValue: {stateValue}</Text>
      <Text>globalValue: {globalValue}</Text>
      <Button
        title="increment"
        onPress={() => {
          globalValue++;
          setStateValue(v => v + 1);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
