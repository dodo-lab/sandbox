import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch, SwitchProps, Text} from 'react-native-elements';

type Props = {
  label: string;
  switchProps: SwitchProps;
};

export const FormSwitch: React.FC<Props> = ({label, switchProps}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch {...switchProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
