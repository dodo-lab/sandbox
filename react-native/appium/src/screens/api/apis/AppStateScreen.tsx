import React, {useEffect} from 'react';
import {AppState, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', state => {
      console.log(state);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text h4>Return to home or switch to another app.</Text>
      <Text h4>Then check the log.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
});

export const AppStateScreen: ScreenProps = {
  name: 'AppState',
  component: Screen,
  options: {
    title: 'AppState',
  },
};
