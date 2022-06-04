import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Linking, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const supportedURL = 'https://google.com';
const unsupportedURL = 'slack://open?item=123456';

const Screen: React.FC = () => {
  const [initialUrl, setInitialUrl] = useState('');

  const openUrl = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      console.log('before Linking.openURL');
      await Linking.openURL(url);
      console.log('after Linking.openURL');
    } else {
      Alert.alert(`unsupported url : ${url}`);
    }
  }, []);

  const openCustomSettings = useCallback(async () => {
    console.log('before Linking.openSettings');
    await Linking.openSettings();
    console.log('after Linking.openSettings');
  }, []);

  useEffect(() => {
    (async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url ?? 'null');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="open url(supported)" onPress={() => openUrl(supportedURL)} />
      <Button title="open url(unsupported)" onPress={() => openUrl(unsupportedURL)} />
      <Button title="open settings" onPress={openCustomSettings} />
      <Text>Initial URL : {initialUrl}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export const LinkingScreen: ScreenProps = {
  name: 'Linking',
  component: Screen,
  options: {
    title: 'Linking',
  },
};
