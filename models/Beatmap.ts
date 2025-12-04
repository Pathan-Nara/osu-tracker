export interface BeatmapStats {
  rating: number;
  bpm: number;
  length: number;
  ar: number;
  od: number;
  cs: number;
  hp: number;
}

export class Beatmap {
  id: number;
  title: string;
  artist: string;
  creator: string;
  stats: BeatmapStats;
  favoriteCount: number;
  previewUrl: string;

  constructor(
    id: number,
    title: string,
    artist: string,
    creator: string,
    stats: BeatmapStats,
    favoriteCount: number,
    previewUrl: string = ''
  ) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.creator = creator;
    this.stats = stats;
    this.favoriteCount = favoriteCount;
    this.previewUrl = previewUrl;
  }

  formatLength(): string {
    const minutes = Math.floor(this.stats.length / 60);
    const seconds = this.stats.length % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  formatRating(): string {
    return this.stats.rating.toFixed(2);
  }

}
