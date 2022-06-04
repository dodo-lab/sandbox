import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

type Props = {
  data: string[];
};

export const LinkList: React.FC<Props> = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
            bottomDivider
            onPress={() => navigation.navigate(item)}>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
