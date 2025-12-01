import React from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  placeholder: string;
  isLoading: boolean;
}

export function SearchBar({
  value,
  onChangeText,
  onPress,
  placeholder,
  isLoading,
}: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        editable={!isLoading}
      />
      <TouchableOpacity
        style={[styles.searchButton, isLoading && styles.searchButtonDisabled]}
        onPress={onPress}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.searchButtonText}>🔍</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
