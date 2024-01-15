import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, delay, finalize, of, tap } from 'rxjs';
import { User } from '../../models/user';
import { StorageService } from './storage.service';
import { USER_STORAGE_KEY } from '../../constants/user-storage-key';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $loading: WritableSignal<boolean> = signal(false);
  $user: WritableSignal<User | null> = signal(null);
  constructor(private storageService: StorageService) {}

  login({
    email,
    password,
    remember,
  }: {
    email: string;
    password: string;
    remember: boolean;
  }): Observable<User> {
    this.$loading.set(true);
    const user: User = new User({
      name: 'PrograMarc',
      email: 'programarcdev@gmail.com',
      storageService: this.storageService,
    });
    return of(user).pipe(
      delay(1000),
      tap((user: User) => this.$user.set(user)),
      finalize(() => this.$loading.set(false))
    );
  }
  logout(): Observable<void> {
    return new Observable((observer) => {
      this.$user.set(null);
      this.storageService.remove(USER_STORAGE_KEY);
      observer.next();
      observer.complete();
    });
  }

  getUserFromStorage(): Observable<void> {
    return new Observable((observer) => {
      const user: User | null = this.storageService.get(USER_STORAGE_KEY)
        ? new User({
            ...JSON.parse(this.storageService.get(USER_STORAGE_KEY)),
            storageService: this.storageService,
          })
        : null;
      this.$user.set(user);
      observer.next();
      observer.complete();
    });
  }
}
