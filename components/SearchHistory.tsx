import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SearchHistoryItem } from '../services/SearchHistoryService';
import { styles } from '../styles/styles';

interface SearchHistoryProps {
  history: SearchHistoryItem[];
  onSelectItem: (query: string) => void;
  onRemoveItem: (query: string, type: 'player' | 'beatmap') => void;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onSelectItem,
  onRemoveItem,
}) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>Historique</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {history.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.historyItem}
            onPress={() => onSelectItem(item.query)}
          >
            <Text style={styles.historyItemText}>{item.query}</Text>
            <Text style={styles.historyItemBadge}>
              {item.type === 'player' ? '👤' : '🎵'}
            </Text>
            <TouchableOpacity
              onPress={() => onRemoveItem(item.query, item.type)}
              style={styles.historyItemClose}
            >
              <Text style={styles.historyItemCloseText}>✕</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
