import React from 'react';
import {ScrollViewAnimationScreen} from './ScrollViewAnimationScreen';
import {SimpleAnimationScreen} from './SimpleAnimationScreen';
import {LinkList} from 'screens/ui-parts/LinkList';
import {PanResponderAnimationScreen} from './PanResponderAnimationScreen';
import {LayoutAnimationScreen} from './LayoutAnimationScreen';

const data = [
  SimpleAnimationScreen.name,
  ScrollViewAnimationScreen.name,
  PanResponderAnimationScreen.name,
  LayoutAnimationScreen.name,
];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const AnimationsScreen: ScreenProps = {
  name: 'Animations',
  component: Screen,
  options: {
    title: 'Animations',
  },
};
