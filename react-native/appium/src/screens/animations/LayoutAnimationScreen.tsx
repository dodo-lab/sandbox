import React, {useState} from 'react';
import {LayoutAnimation, NativeModules, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, ButtonGroup, Text} from 'react-native-elements';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const buttons = ['spring', 'easeInEaseOut', 'linear'] as const;
type ButtonType = typeof buttons[number];

const Screen: React.FC = () => {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [type, setType] = useState<ButtonType>('spring');

  const handleTypeButtonPress = (index: number) => {
    setType(buttons[index]);
  };

  const handleAnimationButtonPress = (index: number) => {
    LayoutAnimation[type]();

    const add = index === 0 ? 30 : -30;
    setWidth(width + add);
    setHeight(height + add);
  };

  return (
    <View style={styles.container}>
      <ButtonGroup
        selectedIndex={buttons.indexOf(type)}
        buttons={buttons.map(value => value.toString())}
        onPress={handleTypeButtonPress}
      />
      <View style={[styles.box, {width: width, height: height}]} />
      <ButtonGroup buttons={['Bigger', 'Smaller']} onPress={handleAnimationButtonPress} />
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
    width: 200,
    height: 200,
    backgroundColor: 'red',
    marginBottom: 20,
  },
});

export const LayoutAnimationScreen: ScreenProps = {
  name: 'LayoutAnimation',
  component: Screen,
  options: {
    title: 'LayoutAnimation',
  },
};
