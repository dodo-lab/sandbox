import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        Animated.spring(pan, {toValue: {x: 0, y: 0}, useNativeDriver: true}).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: pan.getTranslateTransform()}} {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export const PanResponderAnimationScreen: ScreenProps = {
  name: 'PanResponderAnimation',
  component: Screen,
  options: {
    title: 'PanResponderAnimation',
  },
};
