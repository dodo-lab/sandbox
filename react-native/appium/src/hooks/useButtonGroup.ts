import {useState} from 'react';
import {ButtonGroupProps} from 'react-native-elements';

export function useButtonGroup(buttons: string[]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = buttons[selectedIndex];

  const onPress = (index: number) => {
    setSelectedIndex(index);
  };

  const props: ButtonGroupProps = {onPress, buttons, selectedIndex};

  return {selected, props, selectedIndex};
}
