import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>🎵</Text>
      <Text style={styles.emptyMessage}>{message}</Text>
    </View>
  );
}
