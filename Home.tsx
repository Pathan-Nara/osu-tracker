import * as React from 'react';

import { View, Button, StyleSheet, Text } from 'react-native';

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home — osu-tracker</Text>
      <Button 
        title="Fetch Beatmaps" 
        onPress={() => navigation.navigate('Beatmaps')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#000000' 
  },
  title: { 
    fontSize: 20, 
    marginBottom: 20,
    color: '#fff' 
  },
});