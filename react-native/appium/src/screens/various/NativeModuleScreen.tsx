import CalendarModule, {DEFAULT_EVENT_NAME} from 'native/CalendarModule';
import DialogModule, {SINGLE_BUTTON, DOUBLE_BUTTON, DialogClickEvent} from 'native/DialogModule';
import ImagePickerModule from 'native/ImagePickerModule';
import React, {useEffect, useRef, useState} from 'react';
import {EmitterSubscription, NativeEventEmitter, NativeModule, NativeModules, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const eventListener = useRef<EmitterSubscription>();

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.DialogModule);
    eventListener.current = eventEmitter.addListener('onClick', (event: DialogClickEvent) => {
      console.log('native onClick event', event);
    });

    return () => eventListener.current?.remove();
  }, []);

  const handlePress = () => {
    // Android Studio の Logcatに出力される
    CalendarModule.createCalendarEvent('testName', 'testLocation', eventId =>
      console.log(`Created a new event with id ${eventId}`),
    );
  };

  const handlePressPromise = async () => {
    const name = 'testName'; // ★'error'で、エラーケースを確認可能

    try {
      const eventId = await CalendarModule.createCalendarEventPromise(name, 'testLocation');
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDialogOpen = (type: string) => {
    DialogModule.show('title', 'message', type);
  };

  const handleImagePicker = async () => {
    try {
      const uri = await ImagePickerModule.pickImage();
      console.log(uri);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="invoke native module!" onPress={handlePress} />
      <Button title="invoke native module(Promise)!" onPress={handlePressPromise} />
      <Text h3>{DEFAULT_EVENT_NAME}</Text>
      <Button title="dialog open(SingleButton)" onPress={() => handleDialogOpen(SINGLE_BUTTON)} />
      <Button title="dialog open(DoubleButton)" onPress={() => handleDialogOpen(DOUBLE_BUTTON)} />
      <Button title="image picker" onPress={handleImagePicker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export const NativeModuleScreen: ScreenProps = {
  name: 'NativeModule',
  component: Screen,
  options: {
    title: 'NativeModule',
  },
};
