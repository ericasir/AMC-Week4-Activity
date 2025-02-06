import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
      “You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. 
         You're on your own. And you know what you know. And you are the guy who'll decide where to go." — Dr. Seuss
        <Text style={styles.text}>
        “You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. 
         You're on your own. And you know what you know. And you are the guy who'll decide where to go." — Dr. Seuss
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;