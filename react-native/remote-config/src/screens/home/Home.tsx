import remoteConfig from '@react-native-firebase/remote-config';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, ThemeContext} from 'react-native-elements';

export const Home: React.FC = () => {
  const {theme} = useContext(ThemeContext);
  const [testId, setTestId] = useState('dummy');

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        testId: 'default id',
      })
      .then(() => {
        return remoteConfig().setConfigSettings({
          fetchTimeMillis: 0,
          minimumFetchIntervalMillis: 0,
        });
      })
      .then(() => {
        console.log('Default value set.');
        return remoteConfig().fetchAndActivate();
      })
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log('No configs were fetched from the backend, and the local configs were already activated');
        }

        const value = remoteConfig().getValue('testId');
        setTestId(value.asString());
      })
      .catch(_ => {});
  }, []);

  return (
    <View style={StyleSheet.flatten([styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Text>{testId}</Text>
      <Button title="get" onPress={() => setTestId(remoteConfig().getString('testId'))} />
      <Button title="fetch" onPress={() => remoteConfig().fetch(0)} />
      <Button title="fetchAndActivate" onPress={() => remoteConfig().fetchAndActivate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#fefefe',
  },
});
