import React, {useCallback, useEffect, useRef} from 'react';
import {ScrollView, ScrollViewProps, View, ViewProps} from 'react-native';

type ScrollTargetViewProps<Key extends string> = ViewProps & {
  name: Key;
};

type ScrollTarget<Key extends string> = {
  name: Key;
  view: View;
};

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

  const ScrollTargetView: React.FC<ScrollTargetViewProps<Key>> = ({name, children, ...props}) => {
    const viewRef = useRef<View>(null);

    useEffect(() => {
      if (viewRef.current !== null) {
        console.log('addTarget', name);
        addTarget({name, view: viewRef.current});
      }
    }, [name]);

    return (
      <View {...props} ref={viewRef}>
        {children}
      </View>
    );
  };

  return {ScrollViewRoot, ScrollTargetView};
};
