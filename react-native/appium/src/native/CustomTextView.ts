import {requireNativeComponent, TextStyle} from 'react-native';

type Props = {
  value: string;
  style?: TextStyle;
};

export const CustomTextView = requireNativeComponent<Props>('CustomTextView');
