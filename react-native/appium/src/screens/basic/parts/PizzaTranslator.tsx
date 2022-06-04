import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const PizzaTranslator: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here to translate"
        onChangeText={setText}
        defaultValue={text}
      />
      <Text style={styles.pizza}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pizza: {
    fontSize: 30,
  },
});
