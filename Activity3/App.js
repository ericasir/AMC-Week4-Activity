import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar, TouchableOpacity,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const DATA = [
  {
    title: 'Morning',
    data: ['Coffee', 'Cellphone', 'Shower', 'Jogging', 'Playing with nephew', 'Sleep', 'Eat', 'Going to Rescue Base', 'Coffee', 'Fire Alarm', 'Patient Transpo' ],
  },
  {
    title: 'Afternoon',
    data: ['Cellphone', 'Eating', 'Coffee', 'Going to Rescue Base', 'Fire Alarm', 'Patient Transpo', 'Eating', 'Sleep', 'Fire Alarm'],
  },
  {
    title: 'Evening',
    data: ['Cellphone', 'Eating', 'Drinking with Friends', 'Shower', 'Sleep'],
  },
];

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#eaeaea',
  },
  item: {
    backgroundColor: '#00bfff',
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    borderColor: '#20203a',
    borderRadius: 6,
    marginTop: 16,
    borderWidth: 4,
    fontSize: 30,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;