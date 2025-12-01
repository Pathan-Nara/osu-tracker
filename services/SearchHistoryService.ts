import AsyncStorage from '@react-native-async-storage/async-storage';

export interface SearchHistoryItem {
  query: string;
  type: 'player' | 'beatmap';
  timestamp: number;
}

const HISTORY_KEY = '@osu_tracker_search_history';
const MAX_HISTORY = 20;

export class SearchHistoryService {
  static async addSearch(query: string, type: 'player' | 'beatmap'): Promise<void> {
    try {
      const history = await this.getHistory();
      
      const newItem: SearchHistoryItem = {
        query,
        type,
        timestamp: Date.now(),
      };

      const filtered = history.filter(
        (item) => !(item.query === query && item.type === type)
      );

      const updated = [newItem, ...filtered].slice(0, MAX_HISTORY);
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error adding to search history:', e);
    }
  }

  static async getHistory(): Promise<SearchHistoryItem[]> {
    try {
      const data = await AsyncStorage.getItem(HISTORY_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error getting search history:', e);
      return [];
    }
  }

  static async getHistoryByType(type: 'player' | 'beatmap'): Promise<SearchHistoryItem[]> {
    try {
      const history = await this.getHistory();
      return history.filter((item) => item.type === type);
    } catch (e) {
      console.error('Error getting filtered history:', e);
      return [];
    }
  }

  static async clearHistory(): Promise<void> {
    try {
      await AsyncStorage.removeItem(HISTORY_KEY);
    } catch (e) {
      console.error('Error clearing history:', e);
    }
  }

  static async removeFromHistory(query: string, type: 'player' | 'beatmap'): Promise<void> {
    try {
      const history = await this.getHistory();
      const filtered = history.filter(
        (item) => !(item.query === query && item.type === type)
      );
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
    } catch (e) {
      console.error('Error removing from history:', e);
    }
  }
}

export const searchHistoryService = new SearchHistoryService();
