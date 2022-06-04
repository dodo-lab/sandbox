import React, {useEffect, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const latestPos = useRef({x: 0, y: 0}).current;

  useEffect(() => {
    const listenerId = pan.addListener(value => {
      latestPos.x = value.x;
      latestPos.y = value.y;
    });

    return () => pan.removeListener(listenerId);
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: latestPos.x,
          y: latestPos.y,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateX: pan.x}, {translateY: pan.y}]}} {...panResponder.panHandlers}>
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
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export const PanResponderScreen: ScreenProps = {
  name: 'PanResponder',
  component: Screen,
  options: {
    title: 'PanResponder',
  },
};
