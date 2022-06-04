import {RouteConfig} from '@react-navigation/core';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NativeStackNavigationEventMap} from '@react-navigation/native-stack/lib/typescript/src/types';
import type {NavigationState, ParamListBase} from '@react-navigation/routers';

// https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }

  type ScreenProps = RouteConfig<
    ParamListBase,
    keyof ParamListBase,
    NavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >;
}
