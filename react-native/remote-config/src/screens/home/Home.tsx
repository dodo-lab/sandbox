import remoteConfig from '@react-native-firebase/remote-config';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, ThemeContext} from 'react-native-elements';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const onGoToInstructionButtonPress = useCallback(() => navigation.navigate('Instructions'), [navigation]);

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
        const str = value.asString();
        console.log('remote config value:', str);
      })
      .catch(_ => {});
  }, []);

  return (
    <View style={StyleSheet.flatten([styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Text h1 style={styles.textColor}>
        Hello, World!
      </Text>
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
