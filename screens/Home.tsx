import * as React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from 'react-native';
import { TabButtons } from '../components/TabButtons';
import { SearchBar } from '../components/SearchBar';
import { SearchHistory } from '../components/SearchHistory';
import { FilterButtons } from '../components/FilterButtons';
import { PlayerCard } from '../components/PlayerCard';
import { BeatmapCard } from '../components/BeatmapCard';
import { EmptyState } from '../components/EmptyState';
import { searchViewModel } from '../viewmodels/SearchViewModel';
import { SearchHistoryService, SearchHistoryItem } from '../services/SearchHistoryService';
import { Player } from '../models/Player';
import { Beatmap } from '../models/Beatmap';
import { styles } from '../styles/styles';

export default function Home() {
  const [searchType, setSearchType] = React.useState<'player' | 'beatmap'>('player');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [results, setResults] = React.useState<Player | Beatmap[] | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [history, setHistory] = React.useState<SearchHistoryItem[]>([]);
  const [rankedOnly, setRankedOnly] = React.useState(false);

  React.useEffect(() => {
    loadHistory();
    const unsubscribe = searchViewModel.subscribe(() => {
      setResults(searchViewModel.getResults());
      setIsLoading(searchViewModel.isLoading());
      setError(searchViewModel.getError());
    });
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    loadHistory();
  }, [searchType]);

  const loadHistory = async () => {
    const historyData = await SearchHistoryService.getHistoryByType(searchType);
    setHistory(historyData.slice(0, 5));
  };

  const handleTabChange = (tab: 'player' | 'beatmap') => {
    setSearchType(tab);
    searchViewModel.setType(tab);
    setSearchQuery('');
    setRankedOnly(false);
    searchViewModel.clear();
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    searchViewModel.setQuery(searchQuery);
    searchViewModel.setType(searchType);
    searchViewModel.setRankedOnly(rankedOnly);
    await searchViewModel.search();
    await SearchHistoryService.addSearch(searchQuery, searchType);
    await loadHistory();
  };

  const handleHistorySelect = async (query: string) => {
    setSearchQuery(query);
    searchViewModel.setQuery(query);
    searchViewModel.setType(searchType);
    searchViewModel.setRankedOnly(rankedOnly);
    await searchViewModel.search();
  };

  const handleRemoveHistory = async (query: string, type: 'player' | 'beatmap') => {
    await SearchHistoryService.removeFromHistory(query, type);
    await loadHistory();
  };

  const handleFilterToggle = (ranked: boolean) => {
    setRankedOnly(ranked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>osu! Tracker</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <TabButtons
          selectedTab={searchType}
          onSelectTab={handleTabChange}
        />

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onPress={handleSearch}
          placeholder={
            searchType === 'player'
              ? 'Nom du joueur...'
              : 'Nom de la beatmap...'
          }
          isLoading={isLoading}
        />

        <SearchHistory
          history={history}
          onSelectItem={handleHistorySelect}
          onRemoveItem={handleRemoveHistory}
        />

        {searchType === 'beatmap' && (
          <FilterButtons rankedOnly={rankedOnly} onToggle={handleFilterToggle} />
        )}

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff66cc" />
          </View>
        )}

        {!isLoading && results === null && (
          <EmptyState
            message={
              searchType === 'player'
                ? 'Recherchez un joueur ou une beatmap'
                : 'Recherchez une beatmap'
            }
          />
        )}

        {!isLoading && results && !Array.isArray(results) && (
          <PlayerCard player={results as Player} />
        )}

        {!isLoading &&
          results &&
          Array.isArray(results) &&
          (results as Beatmap[]).map((beatmap) => (
            <BeatmapCard
              key={beatmap.id}
              beatmap={beatmap}
            />
          ))}
      </ScrollView>
    </View>
  );
}
