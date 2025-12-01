import React from 'react';
import { View, Text, Image } from 'react-native';
import { Player } from '../models/Player';
import { styles } from '../styles/styles';

export function PlayerCard({ player }: { player: Player }) {
  const medals = player.getMedalBreakdown();
  const hitAccuracy = player.getHitAccuracy();

  return (
    <View style={styles.playerContainer}>
      {player.avatar && (
        <Image source={{ uri: player.avatar }} style={styles.playerAvatar} />
      )}
      <View style={styles.playerContent}>
        <Text style={styles.playerUsername}>{player.username}</Text>
        <Text style={styles.playerCountry}>🌍 {player.stats.country}</Text>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Rank</Text>
            <Text style={styles.statValue}>{player.formatGlobalRank()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>CR</Text>
            <Text style={styles.statValue}>{player.formatCountryRank()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>PP</Text>
            <Text style={styles.statValue}>{player.formatPP()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Acc</Text>
            <Text style={styles.statValue}>{player.formatAccuracy()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Lvl</Text>
            <Text style={styles.statValue}>{player.formatLevel()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Time</Text>
            <Text style={styles.statValue}>{player.formatPlayTime()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Plays</Text>
            <Text style={styles.statValue}>
              {player.stats.playCount.toLocaleString()}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>RS</Text>
            <Text style={styles.statValue}>{player.formatRankedScore()}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Score</Text>
          <View style={styles.scoreGrid}>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreLabel}>Total</Text>
              <Text style={styles.scoreValue}>{player.formatTotalScore()}</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreLabel}>Ranked</Text>
              <Text style={styles.scoreValue}>{player.formatRankedScore()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Medals ({player.getTotalMedals()})</Text>
          <View style={styles.medalGrid}>
            <View style={styles.medalItem}>
              <Text style={styles.medalLabel}>SS</Text>
              <Text style={styles.medalValue}>{medals.ss}</Text>
            </View>
            <View style={styles.medalItem}>
              <Text style={styles.medalLabel}>SSH</Text>
              <Text style={styles.medalValue}>{medals.ssh}</Text>
            </View>
            <View style={styles.medalItem}>
              <Text style={styles.medalLabel}>S</Text>
              <Text style={styles.medalValue}>{medals.s}</Text>
            </View>
            <View style={styles.medalItem}>
              <Text style={styles.medalLabel}>SH</Text>
              <Text style={styles.medalValue}>{medals.sh}</Text>
            </View>
            <View style={styles.medalItem}>
              <Text style={styles.medalLabel}>A</Text>
              <Text style={styles.medalValue}>{medals.a}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Hits</Text>
          <View style={styles.hitGrid}>
            <View style={styles.hitItem}>
              <Text style={styles.hitLabel}>300</Text>
              <Text style={styles.hitValue}>{hitAccuracy.hits300}%</Text>
            </View>
            <View style={styles.hitItem}>
              <Text style={styles.hitLabel}>100</Text>
              <Text style={styles.hitValue}>{hitAccuracy.hits100}%</Text>
            </View>
            <View style={styles.hitItem}>
              <Text style={styles.hitLabel}>50</Text>
              <Text style={styles.hitValue}>{hitAccuracy.hits50}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.playerFooter}>
          <Text style={styles.playerFooterText}>
            {player.stats.joinDate.split(' ')[0]}
          </Text>
        </View>
      </View>
    </View>
  );
}
