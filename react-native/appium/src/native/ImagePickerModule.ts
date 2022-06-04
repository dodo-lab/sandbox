import {NativeModules} from 'react-native';
const {ImagePickerModule} = NativeModules;

interface ImagePickerIF {
  pickImage(): Promise<string>;
}

export default ImagePickerModule as ImagePickerIF;
