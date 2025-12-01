export interface PlayerStats {
  globalRank: number;
  countryRank: number;
  pp: number;
  accuracy: number;
  playCount: number;
  level: number;
  country: string;
  rankedScore: number;
  totalScore: number;
  totalPlayTime: number;
  count300: number;
  count100: number;
  count50: number;
  countRankSS: number;
  countRankSSH: number;
  countRankS: number;
  countRankSH: number;
  countRankA: number;
  joinDate: string;
}

export class Player {
  id: number;
  username: string;
  avatar: string;
  stats: PlayerStats;

  constructor(
    id: number,
    username: string,
    avatar: string,
    stats: PlayerStats
  ) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.stats = stats;
  }

  formatGlobalRank(): string {
    if (this.stats.globalRank == 0) {
      return "unranked";
    }
    return `#${this.stats.globalRank.toLocaleString()}`;
  }

  formatCountryRank(): string {
    return `#${this.stats.countryRank.toLocaleString()}`;
  }

  formatAccuracy(): string {
    return `${this.stats.accuracy.toFixed(2)}%`;
  }

  formatPP(): string {
    return `${this.stats.pp.toFixed(0)}pp`;
  }

  formatLevel(): string {
    return `Lvl ${this.stats.level.toFixed(1)}`;
  }

  formatPlayTime(): string {
    const hours = Math.floor(this.stats.totalPlayTime / 3600);
    return `${hours}h`;
  }

  formatRankedScore(): string {
    return `${(this.stats.rankedScore / 1000000).toFixed(1)}M`;
  }

  formatTotalScore(): string {
    return `${(this.stats.totalScore / 1000000).toFixed(1)}M`;
  }

  getTotalMedals(): number {
    return (
      this.stats.countRankSS +
      this.stats.countRankSSH +
      this.stats.countRankS +
      this.stats.countRankSH +
      this.stats.countRankA
    );
  }

  getMedalBreakdown(): { ss: number; ssh: number; s: number; sh: number; a: number } {
    return {
      ss: this.stats.countRankSS,
      ssh: this.stats.countRankSSH,
      s: this.stats.countRankS,
      sh: this.stats.countRankSH,
      a: this.stats.countRankA,
    };
  }

  getHitAccuracy(): { hits300: number; hits100: number; hits50: number } {
    const total = this.stats.count300 + this.stats.count100 + this.stats.count50;
    if (total === 0) return { hits300: 0, hits100: 0, hits50: 0 };
    return {
      hits300: Math.round((this.stats.count300 / total) * 100),
      hits100: Math.round((this.stats.count100 / total) * 100),
      hits50: Math.round((this.stats.count50 / total) * 100),
    };
  }
}
