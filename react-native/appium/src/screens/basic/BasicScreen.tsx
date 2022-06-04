import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatListTest, PizzaTranslator, ScrollViewTest, SectionListTest} from './parts';

const Screen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PizzaTranslator />
      <ScrollViewTest />
      <FlatListTest />
      <SectionListTest />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const BasicScreen: ScreenProps = {
  name: 'Basic',
  component: Screen,
  options: {
    title: 'Basic',
  },
};
