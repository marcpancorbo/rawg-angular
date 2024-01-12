import { WritableSignal, signal } from '@angular/core';
import { USER_STORAGE_KEY } from '../constants/user-storage-key';
import { StorageService } from '../services/common/storage.service';
import { Game } from './game';

export class User {
  email: string;
  name: string;
  $favouriteGames: WritableSignal<Map<number, Game>> = signal(new Map());
  storageService: StorageService;

  constructor({
    email,
    name,
    storageService,
    favouriteGames,
  }: {
    email: string;
    name: string;
    storageService: StorageService;
    favouriteGames?: Map<number, Game>;
  }) {
    this.email = email;
    this.name = name;
    this.$favouriteGames.set(new Map(favouriteGames ?? []));
    this.storageService = storageService;
  }

  addGame(game: Game) {
    if (this.$favouriteGames().has(game.id)) {
      this.$favouriteGames().delete(game.id);
      this.$favouriteGames.set(new Map(this.$favouriteGames()));
    } else {
      this.$favouriteGames().set(game.id, game);
      this.$favouriteGames.set(new Map(this.$favouriteGames()));
    }
    this.updateStorage();
  }

  updateStorage(): void {
    this.storageService.update(
      USER_STORAGE_KEY,
      JSON.stringify({
        email: this.email,
        name: this.name,
        favouriteGames: Array.from(this.$favouriteGames()),
      })
    );
  }
}
