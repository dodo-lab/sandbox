import {NativeModules} from 'react-native';
const {DialogModule} = NativeModules;

interface DialogIF {
  show(title: string, message: string, type: string): void;
}

export default DialogModule as DialogIF;

export const {SINGLE_BUTTON, DOUBLE_BUTTON} = DialogModule.getConstants() as {
  SINGLE_BUTTON: string;
  DOUBLE_BUTTON: string;
};

export type DialogClickEvent = {
  click: boolean;
};
