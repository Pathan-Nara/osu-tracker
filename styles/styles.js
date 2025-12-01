import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#7c3aed',
  accent: '#ec4899',
  secondary: '#3b82f6',
  background: '#0f172a',
  surface: '#1e293b',
  surfaceLight: '#334155',
  text: '#f1f5f9',
  textSecondary: '#cbd5e1',
  textTertiary: '#94a3b8',
  border: '#475569',
  error: '#ef4444',
  success: '#10b981',
};

export const navigationStyles = {
  headerStyle: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTintColor: COLORS.primary,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.surface,
  },
  headerTitleAlign: 'center',
};

export const styles = StyleSheet.create({
  // ========== SCREEN STYLES ==========
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  // ========== STATES ==========
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  errorContainer: {
    backgroundColor: COLORS.error + '20',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyMessage: {
    color: COLORS.textSecondary,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },

  // ========== TAB BUTTONS ==========
  tabContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    paddingTop: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  tabActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  tabTextActive: {
    color: COLORS.text,
    fontWeight: '700',
  },

  // ========== SEARCH BAR ==========
  searchContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    color: COLORS.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchButton: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchButtonDisabled: {
    opacity: 0.5,
  },
  searchButtonIcon: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.background,
    borderRadius: 12,
  },

  // ========== PLAYER CARD ==========
  playerContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  playerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: COLORS.accent,
  },
  playerContent: {
    gap: 16,
  },
  playerUsername: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  playerCountry: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },

  // ========== STATS GRID ==========
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statItem: {
    flex: 1,
    minWidth: '48%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accent,
  },

  // ========== SECTIONS ==========
  section: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginBottom: 12,
  },

  // ========== SCORE GRID ==========
  scoreGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  scoreItem: {
    flex: 1,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  scoreValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },

  // ========== MEDAL GRID ==========
  medalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  medalItem: {
    flex: 1,
    minWidth: '18%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  medalLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  medalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accent,
  },

  // ========== HIT GRID ==========
  hitGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  hitItem: {
    flex: 1,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  hitLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  hitValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.success,
  },

  // ========== PLAYER FOOTER ==========
  playerFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    alignItems: 'center',
  },
  playerFooterText: {
    color: COLORS.textTertiary,
    fontSize: 12,
    fontStyle: 'italic',
  },

  // ========== BEATMAP CARD ==========
  beatmapContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  beatmapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  beatmapTitleSection: {
    flex: 1,
    marginRight: 12,
  },
  beatmapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accent,
    marginBottom: 4,
  },
  beatmapArtist: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  ratingBadge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rating: {
    fontSize: 16,
  },
  ratingValue: {
    color: COLORS.background,
    fontWeight: 'bold',
    fontSize: 14,
  },
  beatmapCreator: {
    fontSize: 12,
    color: COLORS.textTertiary,
    marginBottom: 12,
    fontStyle: 'italic',
  },

  // ========== BEATMAP STATS GRID ==========
  beatmapStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  beatmapStatItem: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  beatmapStatLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  beatmapStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },

  // ========== BEATMAP FOOTER ==========
  beatmapFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  beatmapDifficulty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  beatmapFavorites: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },

  // ========== AUDIO PLAYER ==========
  audioPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 12,
    padding: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  audioPlayButton: {
    backgroundColor: COLORS.accent,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioPlayButtonText: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  audioPlayerInfo: {
    flex: 1,
  },
  audioPlayerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  audioPlayerTime: {
    fontSize: 12,
    color: COLORS.textTertiary,
  },
  audioPlayerNoPreview: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textTertiary,
    fontStyle: 'italic',
  },
});


