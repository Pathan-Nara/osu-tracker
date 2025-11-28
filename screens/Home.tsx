import * as React from 'react';
import { styles } from '../styles/styles';

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
