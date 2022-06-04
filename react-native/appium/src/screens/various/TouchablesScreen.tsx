import React, {useCallback} from 'react';
import {
  Alert,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const handlePress = () => {
    Alert.alert('press button');
  };

  const buttonView = useCallback((text: string) => {
    return (
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handlePress}>{buttonView('TouchableHighlight')}</TouchableHighlight>
      <TouchableOpacity onPress={handlePress}>{buttonView('TouchableOpacity')}</TouchableOpacity>
      <TouchableNativeFeedback onPress={handlePress}>{buttonView('TouchableNativeFeedback')}</TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={handlePress}>
        {buttonView('TouchableWithoutFeedback')}
      </TouchableWithoutFeedback>
      <TouchableHighlight onLongPress={handlePress}>{buttonView('Touchable with Long Press')}</TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 300,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    color: 'white',
    fontSize: 16,
  },
});

export const TouchablesScreen: ScreenProps = {
  name: 'Touchables',
  component: Screen,
  options: {
    title: 'Touchables',
  },
};
