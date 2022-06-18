import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';
import {Formik, FormikValues} from './node_modules/formik/dist/index';
import {useScrollTo} from './useScrollTo';

const initialValues = {
  name: '',
  age: '',
  address: '',
};

type FormValues = typeof initialValues;

type FormSchema<Values extends FormikValues> = {
  [K in keyof Values]: Yup.AnySchema;
};

const validationSchema = () =>
  Yup.object<FormSchema<FormValues>>({
    name: Yup.string().required(),
    age: Yup.string().required(),
    address: Yup.string().required(),
  });

const App = () => {
  const {ScrollTargetView, ScrollViewRoot, scrollTo} = useScrollTo<keyof FormValues>();
  const nameRef = useRef<TextInput>(null);
  const viewRef = useRef<View>(null);

  return (
    <ScrollViewRoot>
      <Formik initialValues={initialValues} onSubmit={() => {}} validateOnBlur validationSchema={validationSchema}>
        {props => {
          const {values, errors, handleChange} = props;

          return (
            <>
              <View style={{backgroundColor: 'red', height: 100}} />
              <ScrollTargetView name="name">
                <Input
                  label="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  errorMessage={errors.name}
                  ref={nameRef}
                />
              </ScrollTargetView>
              <View ref={viewRef} style={{backgroundColor: 'red', height: 500}} />
              <ScrollTargetView name="age">
                <Input label="Age" value={values.age} onChangeText={handleChange('age')} errorMessage={errors.age} />
              </ScrollTargetView>
              <View style={{backgroundColor: 'red', height: 500}} />
              <ScrollTargetView name="address">
                <Input
                  label="Adress"
                  value={values.address}
                  onChangeText={handleChange('address')}
                  errorMessage={errors.address}
                />
              </ScrollTargetView>
              <View style={{backgroundColor: 'red', height: 500}} />
              <Button
                title="scroll to name"
                onPress={() => {
                  scrollTo('name');
                }}
              />
              <Button
                title="scroll to age"
                onPress={() => {
                  scrollTo('age');
                }}
              />
              <Button title="validate" onPress={() => {}} />
            </>
          );
        }}
      </Formik>
    </ScrollViewRoot>
  );
};

export default App;
