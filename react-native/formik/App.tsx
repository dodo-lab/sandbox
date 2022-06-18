import React from 'react';
import {View} from 'react-native';
import {Button, Input, InputProps} from 'react-native-elements';
import * as Yup from 'yup';
import {Formik, FormikProps, FormikValues} from './node_modules/formik/dist/index';
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

function inputPropsFromFormik<Values extends FormikValues>(
  formikProps: FormikProps<Values>,
  key: keyof Values,
): InputProps {
  return {
    value: formikProps.values[key],
    onChangeText: formikProps.handleChange(key),
    errorMessage: formikProps.errors[key]?.toString(),
  };
}

const validationSchema = () =>
  Yup.object<FormSchema<FormValues>>({
    name: Yup.string().required(),
    age: Yup.string().required(),
    address: Yup.string().required(),
  });

const App = () => {
  const {ScrollTargetView, ScrollViewRoot, scrollTo, scrollToFirstError} = useScrollTo<keyof FormValues>();

  return (
    <ScrollViewRoot>
      <Formik initialValues={initialValues} onSubmit={() => {}} validateOnBlur validationSchema={validationSchema}>
        {props => {
          return (
            <>
              <View style={{backgroundColor: 'red', height: 100}} />
              <ScrollTargetView name="name">
                <Input label="Name" {...inputPropsFromFormik(props, 'name')} />
              </ScrollTargetView>
              <View style={{backgroundColor: 'red', height: 500}} />
              <ScrollTargetView name="age">
                <Input label="Age" {...inputPropsFromFormik(props, 'age')} />
              </ScrollTargetView>
              <View style={{backgroundColor: 'red', height: 500}} />
              <ScrollTargetView name="address">
                <Input label="Address" {...inputPropsFromFormik(props, 'address')} />
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
              <Button
                title="validate"
                onPress={async () => {
                  const errors = await props.validateForm();
                  scrollToFirstError(errors);
                }}
              />
            </>
          );
        }}
      </Formik>
    </ScrollViewRoot>
  );
};

export default App;
