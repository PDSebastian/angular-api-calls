import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface User {
  id: string;
}

interface ApiError {
  status: number;
  message: string;
  details: string[];
}

@Component({
  selector: 'app-demo5-post',
  templateUrl: './demo5-post.html',
})
export class Demo5Post {
  private readonly http = inject(HttpClient);

  protected readonly firstName = signal<string>('');
  protected readonly email = signal<string>('');
  protected readonly message = signal<string>('');

  protected create(): void {
    const body = {
      firstName: this.firstName(),
      lastName: 'Demo',
      email: this.email(),
      password: 'parola123',
      age: 20,
    };
    this.http.post<User>('/users-api/api/users', body, { observe: 'response' }).subscribe({
      next: (response) => this.message.set(`${response.status}: creat cu id ${response.body?.id}`),
      error: (response: HttpErrorResponse) => {
        const error: ApiError = response.error;
        this.message.set(`${response.status}: ${error.message} ${error.details.join(', ')}`);
      },
    });
  }
}
