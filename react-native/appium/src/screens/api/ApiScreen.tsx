import React from 'react';
import {LinkList} from 'screens/ui-parts';
import * as Screens from './apis';

const screens = Object.values(Screens);
const data = screens.map(screen => screen.name);

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const ApiScreen: ScreenProps = {
  name: 'Api',
  component: Screen,
  options: {
    title: 'Api',
  },
};
