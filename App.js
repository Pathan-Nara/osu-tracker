import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { OSU_API_KEY, OSU_API_BASE } from '@env';

export default function App() {
  const [username, setUsername] = useState("peppy");
  const [result, setResult] = useState(null);

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
    <ScrollView style={{ marginTop: 70, padding: 20 }}>
      <Text>osu-tracker — test .env</Text>

      <Button title="Fetch beatmaps" onPress={fetchBeatmaps} />

      {result && (
        <Text style={{ marginTop: 20, fontFamily: "monospace" }}>
          {JSON.stringify(result, null, 2)}
        </Text>
      )}
    </ScrollView>
  );
}
