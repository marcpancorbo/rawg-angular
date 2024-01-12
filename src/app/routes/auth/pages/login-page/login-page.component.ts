import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, exhaustMap, filter, takeUntil, tap } from 'rxjs';
import { USER_STORAGE_KEY } from '../../../../core/constants/user-storage-key';
import { User } from '../../../../core/models/user';
import { AuthService } from '../../../../core/services/common/auth.service';
import { StorageService } from '../../../../core/services/common/storage.service';
import { AutoDestroyService } from '../../../../core/services/utils/auto-destroy.service';
import { SpinnerComponent } from '../../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, SpinnerComponent],
  providers: [AutoDestroyService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitClicked$: Subject<void> = new Subject<void>();
  $loading: Signal<boolean> = this.authService.$loading;

  constructor(
    private fb: FormBuilder,
    private destroy$: AutoDestroyService,
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.subscribeToSubmit();
  }
  initForm(): void {
    this.form = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      remember: [false],
    });
  }
  subscribeToSubmit(): void {
    this.submitClicked$
      .pipe(takeUntil(this.destroy$))
      .pipe(
        tap(() => {
          if (this.form.invalid) {
            Object.values(this.form.controls).forEach((control) => {
              if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
              }
            });
          }
        }),
        filter(() => this.form.valid),
        exhaustMap(() => this.authService.login(this.form.value))
      )
      .subscribe((user: User) => {
        this.storageService.set(
          USER_STORAGE_KEY,
          JSON.stringify(user),
          this.form.value.remember ? localStorage : sessionStorage
        );
        this.router.navigate(['/']);
      });
  }
}
