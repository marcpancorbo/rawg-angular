import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { AuthService } from '../../../../core/services/common/auth.service';
import { User } from '../../../../core/models/user';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  $user: Signal<User | null> = this.authService.$user;
  constructor(private authService: AuthService){}

}
