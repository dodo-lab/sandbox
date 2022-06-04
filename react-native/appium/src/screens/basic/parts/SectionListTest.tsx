import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const sections = [
  {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
  {title: 'J', data: ['Jackson', 'James', 'Jimmy', 'Joel', 'John']},
];

export const SectionListTest: React.FC = () => {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        renderItem={({item}) => <Text style={styles.sectionItem}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  sectionList: {
    height: 150,
    borderWidth: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(210,210,210,1.0)',
  },
  sectionItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
