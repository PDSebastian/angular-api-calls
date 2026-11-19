import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface ApiError {
  status: number;
  message: string;
}

@Component({
  selector: 'app-demo3-loading-error',
  templateUrl: './demo3-loading-error.html',
})
export class Demo3LoadingError implements OnInit {
  private readonly http = inject(HttpClient);

  protected readonly users = signal<User[]>([]);
  protected readonly loading = signal<boolean>(true);
  protected readonly error = signal<string>('');

  ngOnInit(): void {
    this.load('/users-api/api/users');
  }

  protected load(url: string): void {
    this.loading.set(true);
    this.error.set('');
    this.http.get<User[]>(url).subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (response: HttpErrorResponse) => {
        if (response.status === 0 || response.status === 502) {
          this.error.set('Serverul nu răspunde. Ai pornit backend-ul?');
        } else {
          const body: ApiError = response.error;
          this.error.set(`${response.status}: ${body.message}`);
        }
        this.users.set([]);
        this.loading.set(false);
      },
    });
  }
}
