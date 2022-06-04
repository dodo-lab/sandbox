import {useSlider, useSwitch} from 'hooks';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {FormSlider, FormSwitch} from 'screens/ui-parts';

const Screen: React.FC = () => {
  const {value: animation, props: animationProps} = useSwitch(true);
  const [size, sizeProps] = useSlider(50, {maximumValue: 200, minimumValue: 10, step: 1});

  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <FormSwitch label="Animation" switchProps={animationProps} />
        <FormSlider label="Size" sliderProps={sizeProps} />
      </View>
      <View style={styles.horizon}>
        <ActivityIndicator size="small" />
        <ActivityIndicator size="large" />
        <ActivityIndicator size={size} />
        <ActivityIndicator size="large" animating={animation} />
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  settings: {
    width: '100%',
  },
  horizon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export const ActivityIndicatorScreen: ScreenProps = {
  name: 'ActivityIndicator',
  component: Screen,
  options: {
    title: 'ActivityIndicator',
  },
};
