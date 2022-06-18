import {FormikErrors, FormikValues} from 'formik';
import React, {RefObject, useCallback, useEffect, useRef} from 'react';
import {findNodeHandle, ScrollView, ScrollViewProps, View, ViewProps} from 'react-native';

type ScrollTargetViewProps<Key extends string> = ViewProps & {
  name: Key;
};

type ScrollTarget<Key extends string> = {
  name: Key;
  view: View;
};

function scrollToTarget<Key extends string>(
  target: ScrollTarget<Key> | undefined,
  scrollViewRef: RefObject<ScrollView>,
) {
  if (target === undefined) {
    return;
  }

  const nodeHandle = findNodeHandle(scrollViewRef.current);
  if (nodeHandle === null) {
    return;
  }

  target.view.measureLayout(
    nodeHandle,
    (_, y) => {
      scrollViewRef.current?.scrollTo({y});
    },
    () => {},
  );
}

export const useScrollTo = <Key extends string>() => {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollTargetsRef = useRef<ScrollTarget<Key>[]>([]);

  const addTarget = useCallback((target: ScrollTarget<Key>) => {
    const index = scrollTargetsRef.current.findIndex(v => v.name === target.name);
    if (index !== -1) {
      scrollTargetsRef.current[index] = target;
    } else {
      scrollTargetsRef.current.push(target);
    }
  }, []);

  const ScrollViewRoot: React.FC<ScrollViewProps> = React.memo(({children, ...props}) => (
    <ScrollView {...props} ref={scrollViewRef}>
      {children}
    </ScrollView>
  ));

  const ScrollTargetView: React.FC<ScrollTargetViewProps<Key>> = React.memo(({name, children, ...props}) => {
    const viewRef = useRef<View>(null);

    useEffect(() => {
      if (viewRef.current !== null) {
        addTarget({name, view: viewRef.current});
      }
    }, [name]);

    return (
      <View {...props} ref={viewRef}>
        {children}
      </View>
    );
  });

  const scrollTo = useCallback((name: Key) => {
    const target = scrollTargetsRef.current.find(v => v.name === name);
    scrollToTarget(target, scrollViewRef);
  }, []);

  const scrollToFirstError = useCallback((errors: FormikErrors<FormikValues>) => {
    const errorEntries = Object.entries(errors);
    if (errorEntries.length > 0) {
      const [firstErrorName] = errorEntries[0];
      const target = scrollTargetsRef.current.find(v => v.name === firstErrorName);
      scrollToTarget(target, scrollViewRef);
    }
  }, []);

  return {ScrollViewRoot, ScrollTargetView, scrollTo, scrollToFirstError};
};
