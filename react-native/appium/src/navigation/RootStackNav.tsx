import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from 'screens';
import {DevSettings} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Stack = createNativeStackNavigator();
const screens = Object.values(Screens);

export const RootStackNav: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    DevSettings.addMenuItem('Screen transition to Api', () => {
      navigation.navigate(Screens.ApiScreen.name);
    });
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName={Screens.TopScreen.name}>
      {screens.map(screen => {
        return <Stack.Screen key={screen.name} {...screen} />;
      })}
    </Stack.Navigator>
  );
};
