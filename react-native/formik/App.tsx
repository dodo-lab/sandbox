import React, {useRef} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';
import {Formik, FormikValues} from './node_modules/formik/dist/index';

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
  const nameRef = useRef<TextInput>(null);
  const viewRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ScrollView ref={scrollViewRef}>
      <Formik initialValues={initialValues} onSubmit={() => {}} validateOnBlur validationSchema={validationSchema}>
        {props => {
          const {values, errors, handleChange} = props;

          return (
            <>
              <View style={{backgroundColor: 'red', height: 100}} />
              <Input
                label="Name"
                value={values.name}
                onChangeText={handleChange('name')}
                errorMessage={errors.name}
                ref={nameRef}
              />
              <View ref={viewRef} style={{backgroundColor: 'red', height: 800}} />
              <Input label="Age" value={values.age} onChangeText={handleChange('age')} errorMessage={errors.age} />
              <View style={{backgroundColor: 'red', height: 500}} />
              <Input
                label="Adress"
                value={values.address}
                onChangeText={handleChange('address')}
                errorMessage={errors.address}
              />
              <View style={{backgroundColor: 'red', height: 500}} />
              <Button
                title="validate"
                onPress={async () => {
                  const _errors = await props.validateForm();
                  console.log(_errors);

                  console.log('measure', viewRef.current?.measure);
                  console.log('measureInWindow', viewRef.current?.measureInWindow);
                  console.log('measureLayout', viewRef.current?.measureLayout);

                  viewRef.current?.measure((x, y, width, height, pageX, pageY) => {
                    console.log('measure', x, y, width, height, pageX, pageY);
                  });

                  viewRef.current?.measureInWindow((x, y) => {
                    console.log('measureInWindow', x, y);
                  });
                  if (scrollViewRef.current) {
                    viewRef.current?.measureLayout(
                      scrollViewRef.current,
                      (left, top) => {
                        console.log('success', left, top);
                      },
                      () => {
                        console.log('failed');
                      },
                    );
                  }
                }}
              />
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default App;
