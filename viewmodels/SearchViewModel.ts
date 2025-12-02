
import { Player } from '../models/Player';
import { Beatmap } from '../models/Beatmap';
import { osuService } from '../services/OsuService';

export class SearchViewModel {
  private query: string = '';
  private type: 'player' | 'beatmap' = 'player';
  private results: Player | Beatmap[] | null = null;
  private loading: boolean = false;
  private error: string | null = null;
  private rankedOnly: boolean = false;
  private listeners: (() => void)[] = [];

  setQuery(query: string): void {
    this.query = query;
    this.notify();
  }

  getQuery(): string {
    return this.query;
  }

  setType(type: 'player' | 'beatmap'): void {
    this.type = type;
    this.results = null;
    this.notify();
  }

  getType(): 'player' | 'beatmap' {
    return this.type;
  }

  setRankedOnly(ranked: boolean): void {
    this.rankedOnly = ranked;
    this.notify();
  }

  getRankedOnly(): boolean {
    return this.rankedOnly;
  }

  async search(): Promise<void> {
    if (!this.query.trim()) {
      this.error = 'Entrez un terme de recherche';
      this.notify();
      return;
    }

    this.loading = true;
    this.error = null;
    this.results = null;
    this.notify();

    try {
      if (this.type === 'player') {
        const player = await osuService.getPlayer(this.query);
        if (player) {
          this.results = player;
        } else {
          this.error = 'Joueur non trouvé';
        }
      } else {
        const beatmaps = await osuService.getBeatmap(this.query, this.rankedOnly);
        if (beatmaps.length > 0) {
          this.results = beatmaps;
        } else {
          this.error = 'Aucune beatmap trouvée';
        }
      }
    } catch (err) {
      this.error = 'Erreur lors de la recherche';
    }

    this.loading = false;
    this.notify();
  }

  getResults(): Player | Beatmap[] | null {
    return this.results;
  }

  isLoading(): boolean {
    return this.loading;
  }

  getError(): string | null {
    return this.error;
  }

  clear(): void {
    this.results = null;
    this.error = null;
    this.notify();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export const searchViewModel = new SearchViewModel();
