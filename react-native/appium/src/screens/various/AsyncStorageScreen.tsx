import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input} from 'react-native-elements/dist/input/Input';

const STORAGE_KEY = 'EXAMPLE_KEY';

const Screen: React.FC = () => {
  const [name, setName] = useState('World');

  async function loadName() {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name) {
        setName(name);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function saveName(name: string) {
    setName(name);

    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadName();
  }, []);

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={saveName} />
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

export const AsyncStorageScreen: ScreenProps = {
  name: 'AsyncStorage',
  component: Screen,
  options: {
    title: 'AsyncStorage',
  },
};
