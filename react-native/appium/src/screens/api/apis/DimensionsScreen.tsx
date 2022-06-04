import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-elements';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Screen: React.FC = () => {
  const [dimensions, setDimensions] = useState({window, screen});

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', setDimensions);
    return () => subscription.remove();
  });

  return (
    <View style={styles.container}>
      <Text h4>window dimensions</Text>
      {Object.entries(window).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}

      <Text h4>screen dimensions</Text>
      {Object.entries(screen).map(([key, value]) => (
        <Text>
          {key} - {value}
        </Text>
      ))}
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

export const DimensionsScreen: ScreenProps = {
  name: 'Dimensions',
  component: Screen,
  options: {
    title: 'Dimensions',
  },
};
