import {useButtonGroup, useSwitch} from 'hooks';
import React, {useReducer} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Button, ButtonGroup, Text} from 'react-native-elements';
import {FormSwitch} from 'screens/ui-parts';

const animationTypes = ['none', 'slide', 'fade'] as const;

const Screen: React.FC = () => {
  const [modalVisible, modalVisibleDispatch] = useReducer(value => !value, false);
  const {selectedIndex: animationTypeIndex, props: animationButtonProps} = useButtonGroup(
    animationTypes.map(v => v.toString()),
  );
  const {value: transparent, props: transparentProps} = useSwitch(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType={animationTypes[animationTypeIndex]}
        transparent={transparent}
        visible={modalVisible}
        onShow={() => console.log('onShow')}
        onRequestClose={modalVisibleDispatch}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text h4>Modal View</Text>
            <Button title="hide" onPress={modalVisibleDispatch} />
          </View>
        </View>
      </Modal>

      <ButtonGroup {...animationButtonProps} />
      <FormSwitch label="transparent" switchProps={transparentProps} />
      <Button title="show" onPress={modalVisibleDispatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 5,
  },
});

export const ModalScreen: ScreenProps = {
  name: 'Modal',
  component: Screen,
  options: {
    title: 'Modal',
  },
};
