import React from 'react';
import {Alert, Share, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const handleShare = async () => {
    try {
      await Share.share({message: 'Share Message', title: 'Share Title'});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Share" onPress={handleShare} />
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

export const ShareScreen: ScreenProps = {
  name: 'Share',
  component: Screen,
  options: {
    title: 'Share',
  },
};
