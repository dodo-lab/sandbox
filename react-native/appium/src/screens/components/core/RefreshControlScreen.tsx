import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 3000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Text h4>Pull down</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const RefreshControlScreen: ScreenProps = {
  name: 'RefreshControl',
  component: Screen,
  options: {
    title: 'RefreshControl',
  },
};
