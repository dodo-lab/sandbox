import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider, SliderProps, Text} from 'react-native-elements';

type Props = {
  label: string;
  sliderProps: SliderProps;
};

export const FormSlider: React.FC<Props> = ({label, sliderProps}) => {
  return (
    <View style={styles.container}>
      <Slider {...sliderProps} />
      <Text>
        {label}：{sliderProps.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});
