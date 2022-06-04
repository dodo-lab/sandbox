import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('unknown');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('show');
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('hide');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Text h4>Keyboard status：{keyboardStatus}</Text>
      <Input />
      <Button title="dismiss" onPress={Keyboard.dismiss} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const KeyboardScreen: ScreenProps = {
  name: 'Keyboard',
  component: Screen,
  options: {
    title: 'Keyboard',
  },
};
