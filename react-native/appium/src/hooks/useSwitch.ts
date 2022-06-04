import {useReducer} from 'react';
import {SwitchProps} from 'react-native-elements';

export function useSwitch(initialState: boolean) {
  const [value, onValueChange] = useReducer(value => !value, initialState);

  const props: SwitchProps = {value, onValueChange};
  return {value, props};
}
