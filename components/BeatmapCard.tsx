import React from 'react';
import { View, Text } from 'react-native';
import { Beatmap } from '../models/Beatmap';
import { AudioPlayer } from './AudioPlayer';
import { styles } from '../styles/styles';

export function BeatmapCard({ beatmap }: { beatmap: Beatmap }) {
  return (
    <View style={styles.beatmapContainer}>
      <View style={styles.beatmapHeader}>
        <View style={styles.beatmapTitleSection}>
          <Text style={styles.beatmapTitle}>{beatmap.title}</Text>
          <Text style={styles.beatmapArtist}>{beatmap.artist}</Text>
        </View>
        <View style={styles.ratingBadge}>
          <Text style={styles.rating}>⭐</Text>
          <Text style={styles.ratingValue}>{beatmap.formatRating()}</Text>
        </View>
      </View>

      <Text style={styles.beatmapCreator}>{beatmap.creator}</Text>

      <AudioPlayer previewUrl={beatmap.previewUrl} beatmapTitle={beatmap.title} />

      <View style={styles.beatmapStatsGrid}>
        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>BPM</Text>
          <Text style={styles.beatmapStatValue}>
            {beatmap.stats.bpm.toFixed(0)}
          </Text>
        </View>

        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>Len</Text>
          <Text style={styles.beatmapStatValue}>{beatmap.formatLength()}</Text>
        </View>

        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>OD</Text>
          <Text style={styles.beatmapStatValue}>
            {beatmap.stats.od.toFixed(1)}
          </Text>
        </View>

        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>CS</Text>
          <Text style={styles.beatmapStatValue}>
            {beatmap.stats.cs.toFixed(1)}
          </Text>
        </View>

        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>AR</Text>
          <Text style={styles.beatmapStatValue}>
            {beatmap.stats.ar.toFixed(1)}
          </Text>
        </View>

        <View style={styles.beatmapStatItem}>
          <Text style={styles.beatmapStatLabel}>HP</Text>
          <Text style={styles.beatmapStatValue}>
            {beatmap.stats.hp.toFixed(1)}
          </Text>
        </View>
      </View>

      <View style={styles.beatmapFooter}>
        <Text style={styles.beatmapDifficulty}>{beatmap.getDifficulty()}</Text>
        <Text style={styles.beatmapFavorites}>♡ {beatmap.favoriteCount}</Text>
      </View>
    </View>
  );
}
