import {CustomTextView} from 'native/CustomTextView';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomTextView value="custom!!" style={{width: 80, height: 30}} />
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

export const NativeUIScreen: ScreenProps = {
  name: 'NativeUI',
  component: Screen,
  options: {
    title: 'NativeUI',
  },
};
