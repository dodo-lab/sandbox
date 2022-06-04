import {useState} from 'react';
import {SliderProps} from 'react-native-elements';

type UseSliderProps = Omit<SliderProps, 'value' | 'onValueChange'>;

export function useSlider(initialValue: number, sliderProps?: UseSliderProps) {
  const [value, setValue] = useState(initialValue);

  const props: SliderProps = {
    value,
    onValueChange: setValue,
    ...sliderProps,
  };

  return [value, props] as const;
}
