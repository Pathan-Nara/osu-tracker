import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

interface FilterButtonsProps {
  rankedOnly: boolean;
  onToggle: (ranked: boolean) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ rankedOnly, onToggle }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          !rankedOnly && styles.filterButtonActive,
        ]}
        onPress={() => onToggle(false)}
      >
        <Text
          style={[
            styles.filterButtonText,
            !rankedOnly && styles.filterButtonTextActive,
          ]}
        >
          Tous
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.filterButton,
          rankedOnly && styles.filterButtonActive,
        ]}
        onPress={() => onToggle(true)}
      >
        <Text
          style={[
            styles.filterButtonText,
            rankedOnly && styles.filterButtonTextActive,
          ]}
        >
          Ranked
        </Text>
      </TouchableOpacity>
    </View>
  );
};
