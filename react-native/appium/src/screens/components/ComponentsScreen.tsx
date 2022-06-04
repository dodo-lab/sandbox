import React from 'react';
import {LinkList} from 'screens/ui-parts/LinkList';
import * as Screens from './core';

const screens = Object.values(Screens);
const data = screens.map(screen => screen.name);

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const ComponentsScreen: ScreenProps = {
  name: 'Components',
  component: Screen,
  options: {
    title: 'Components',
  },
};
