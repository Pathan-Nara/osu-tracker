import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { OSU_API_KEY, OSU_API_BASE } from '@env';
import { styles } from './styles/styles';

export default function App() {
  const [username, setUsername] = useState("peppy");
  const [result, setResult] = useState([]);

  async function fetchBeatmaps() {
    const params = new URLSearchParams({
      k: OSU_API_KEY,
      u: username,
      type: "string",
      m: "0",
      limit: "10"
    });

    const url = `${OSU_API_BASE}?${params.toString()}`;

    const res = await fetch(url);
    const data = await res.json();
    setResult(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>osu-tracker — test .env</Text>

      <Button title="Fetch beatmaps" onPress={fetchBeatmaps} />

      <ScrollView style={styles.scroll}>
        {result.map((map, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.mapTitle}>{map.title}</Text>
            <Text style={styles.artist}>{map.artist}</Text>
            <Text style={styles.info}>Diff : {map.version}</Text>
            <Text style={styles.info}>BPM : {map.bpm}</Text>
            <Text style={styles.info}>⭐ {parseFloat(map.difficultyrating || 0).toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
