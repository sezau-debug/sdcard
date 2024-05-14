import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const LikePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Like Page</Text>
      <Text style={styles.description}>This is the like page. You can display liked items or perform other actions related to liking content.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LikePage;
