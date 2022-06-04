import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {ButtonGroup, Text} from 'react-native-elements';

const buttons = ['fadeIn', 'fadeOut', 'move', 'sequence'] as const;
type ButtonType = typeof buttons[number];
type ButtonProc = {
  [K in ButtonType]: () => void;
};

const Screen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveXAnim = useRef(new Animated.Value(0)).current;
  const sequencePosAnim = useRef(new Animated.ValueXY({x: 0, y: 100})).current;
  const sequenceRotateAnim = useRef(new Animated.Value(0)).current;

  const sequenceRotateStyle = {
    rotate: sequenceRotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    }),
  };

  const buttonProc: ButtonProc = {
    fadeIn: () => fade(0, 1),
    fadeOut: () => fade(1, 0),
    move: () => move(150),
    sequence: () => sequence(),
  };

  const fade = (initValue: number, toValue: number) => {
    fadeAnim.setValue(initValue);
    Animated.timing(fadeAnim, {
      toValue,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const move = (at: number) => {
    moveXAnim.setValue(0);
    Animated.timing(moveXAnim, {
      toValue: at,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const sequence = () => {
    sequencePosAnim.setValue({x: 0, y: 100});
    sequenceRotateAnim.setValue(0);

    Animated.sequence([
      Animated.decay(sequencePosAnim, {
        velocity: {x: 0.5, y: 0},
        deceleration: 0.997,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(sequencePosAnim, {
          toValue: {x: 0, y: 100},
          useNativeDriver: true,
        }),
        Animated.timing(sequenceRotateAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const handlePress = (index: number, ...args: any[]) => {
    buttonProc[buttons[index]]();
  };

  return (
    <View style={styles.container}>
      <ButtonGroup buttons={buttons.map(value => value.toString())} onPress={handlePress} />
      <Animated.View style={{opacity: fadeAnim}}>
        <Text h2>Fade</Text>
      </Animated.View>
      <Animated.View style={{...styles.posAnim, transform: [{translateX: moveXAnim}]}}>
        <Text h2>Move</Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.posAnim,
          // transform: [{translateX: sequencePosAnim.x}, {translateY: sequencePosAnim.y}, sequenceRotateStyle],
          transform: [...sequencePosAnim.getTranslateTransform(), sequenceRotateStyle],
        }}>
        <Text h2>Seq</Text>
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
  posAnim: {
    position: 'absolute',
    top: 0,
  },
});

export const SimpleAnimationScreen: ScreenProps = {
  name: 'SimpleAnimation',
  component: Screen,
  options: {
    title: 'SimpleAnimation',
  },
};
