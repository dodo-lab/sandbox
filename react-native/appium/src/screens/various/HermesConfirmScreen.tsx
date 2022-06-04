import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const isHermes = useMemo(() => !!(global as any).HermesInternal, []);

  return (
    <View style={styles.container}>
      <Text h3>Hermes is {isHermes ? 'enabled' : 'disabled'}</Text>
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

export const HermesConfirmScreen: ScreenProps = {
  name: 'HermesConfirm',
  component: Screen,
  options: {
    title: 'HermesConfirm',
  },
};
