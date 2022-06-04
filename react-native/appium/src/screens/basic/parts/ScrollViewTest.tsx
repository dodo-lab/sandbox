import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

export const ScrollViewTest: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {[...Array(10)].map((_, index) => (
        <Image key={index} source={logo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    height: 100,
    borderWidth: 1,
  },
});
