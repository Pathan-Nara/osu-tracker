import { Player, PlayerStats } from '../models/Player';
import { Beatmap, BeatmapStats } from '../models/Beatmap';

export class OsuService {
  private apiBaseUrl = 'https://osu.ppy.sh/api';
  private apiBaseUrlV2 = 'https://osu.ppy.sh/api/v2';
  private apiKey = process.env.OSU_API_KEY || '';
  private clientId = process.env.OSU_CLIENT_ID || '';
  private clientSecret = process.env.OSU_CLIENT_SECRET || '';


  async getAccessToken(): Promise<string | null> {
    try {
      const response = await fetch('https://osu.ppy.sh/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: 'client_credentials',
            scope: 'public',
        }),
      });
        if (!response.ok) return null;
        const data = await response.json();
        return data.access_token;
    } catch (e) {
      return null;
    }
  }

  async getPlayer(u: string): Promise<Player | null> {
    try {
      const response = await fetch(
        `${this.apiBaseUrl}/get_user?k=${this.apiKey}&u=${u}`
      );
      if (!response.ok || response.status === 404) return null;

      const data = await response.json();
      if (!data || data.length === 0) return null;

      const user = data[0];

      const stats: PlayerStats = {
        globalRank: parseInt(user.pp_rank) || 0,
        countryRank: parseInt(user.pp_country_rank) || 0,
        pp: parseFloat(user.pp_raw) || 0,
        accuracy: parseFloat(user.accuracy) || 0,
        playCount: parseInt(user.playcount) || 0,
        level: parseFloat(user.level) || 0,
        country: user.country || '',
        rankedScore: parseInt(user.ranked_score) || 0,
        totalScore: parseInt(user.total_score) || 0,
        totalPlayTime: parseInt(user.total_seconds_played) || 0,
        count300: parseInt(user.count300) || 0,
        count100: parseInt(user.count100) || 0,
        count50: parseInt(user.count50) || 0,
        countRankSS: parseInt(user.count_rank_ss) || 0,
        countRankSSH: parseInt(user.count_rank_ssh) || 0,
        countRankS: parseInt(user.count_rank_s) || 0,
        countRankSH: parseInt(user.count_rank_sh) || 0,
        countRankA: parseInt(user.count_rank_a) || 0,
        joinDate: user.join_date || '',
      };

      return new Player(
        parseInt(user.user_id),
        user.username,
        `https://a.ppy.sh/${user.user_id}`,
        stats
      );
    } catch (e) {
      return null;
    }
  }

  async getBeatmap(query: string, rankedOnly: boolean = false): Promise<Beatmap[]> {
    try {
      const token = await this.getAccessToken();
      if (!token) return [];

      const url = new URL(`${this.apiBaseUrlV2}/beatmapsets/search`);
      url.searchParams.append('q', query);
      url.searchParams.append('sort', 'plays_desc');
      url.searchParams.append('s', rankedOnly ? 'ranked' : 'any');

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) return [];
      const data = await response.json();
      if (!data || !data.beatmapsets || !Array.isArray(data.beatmapsets)) return [];
      const searchLower = query.toLowerCase();
      const beatmaps: Beatmap[] = [];
      data.beatmapsets.slice(0, 20).forEach((beatmapset: any) => {
        const titleMatch = beatmapset.title.toLowerCase().includes(searchLower);
        const artistMatch = beatmapset.artist.toLowerCase().includes(searchLower);
        const creatorMatch = beatmapset.creator.toLowerCase().includes(searchLower);
        
        if (!titleMatch && !artistMatch && !creatorMatch) return;

        if (beatmapset.beatmaps && Array.isArray(beatmapset.beatmaps)) {
          const firstBeatmap = beatmapset.beatmaps[0];
          
          const stats: BeatmapStats = {
            rating: firstBeatmap.difficulty_rating || 0,
            bpm: beatmapset.bpm || 0,
            length: firstBeatmap.total_length || 0,
            ar: firstBeatmap.ar || 0,
            od: firstBeatmap.accuracy || 0,
            cs: firstBeatmap.cs || 0,
            hp: firstBeatmap.drain || 0,
          };

          beatmaps.push(
            new Beatmap(
              firstBeatmap.id,
              beatmapset.title,
              beatmapset.artist,
              beatmapset.creator,
              stats,
              beatmapset.favourite_count || 0,
              beatmapset.preview_url ? `https:${beatmapset.preview_url}` : ''
            )
          );
          
          if (beatmaps.length >= 10) return;
        }
      });
      return beatmaps;
    } catch (e) {
      return [];
    }
  }
}

export const osuService = new OsuService();
