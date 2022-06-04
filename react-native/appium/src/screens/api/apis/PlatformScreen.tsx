import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const Component = Platform.select({
    android: <Text h4>Android</Text>,
    ios: <Text h4>iOS</Text>,
    default: <Text h4>Native or Web</Text>,
  });

  return (
    <View style={styles.container}>
      {Component}
      <Text>{JSON.stringify(Platform.constants, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        backgroundColor: 'lightgreen',
      },
      ios: {
        backgroundColor: 'blue',
      },
      default: {
        backgroundColor: 'red',
      },
    }),
  },
});

export const PlatformScreen: ScreenProps = {
  name: 'Platform',
  component: Screen,
  options: {
    title: 'Platform',
  },
};
