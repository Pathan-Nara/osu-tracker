import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

interface TabButtonsProps {
  selectedTab: 'player' | 'beatmap';
  onSelectTab: (tab: 'player' | 'beatmap') => void;
}

export function TabButtons({ selectedTab, onSelectTab }: TabButtonsProps) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'player' && styles.tabActive]}
        onPress={() => onSelectTab('player')}
      >
        <Text style={[styles.tabText, selectedTab === 'player' && styles.tabTextActive]}>
          👤 Player
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, selectedTab === 'beatmap' && styles.tabActive]}
        onPress={() => onSelectTab('beatmap')}
      >
        <Text style={[styles.tabText, selectedTab === 'beatmap' && styles.tabTextActive]}>
          🎵 Beatmap
        </Text>
      </TouchableOpacity>
    </View>
  );
}
