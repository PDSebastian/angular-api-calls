import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

interface ErrorBody {
  status?: number;
  message?: string;
}




@Component({
  selector: 'app-ex3c-not-found',
  templateUrl: './ex3c-not-found.html',
})

export class Ex3cNotFound {
  private readonly http = inject(HttpClient);
  protected readonly email = signal<string>('');
  protected readonly user = signal<User | null>(null);
  protected readonly errorText = signal<string | null>(null);

  protected search():void{
    this.user.set(null);
    this.errorText.set(null);

    this.http
      .get<User>('/users-api/api/users/by-email', {
        params: { email: this.email() },
      })
      .subscribe({
        next: (data) => {
          this.user.set(data);
        },
        error: (response: HttpErrorResponse) => {
          const body = response.error as ErrorBody | null;
          const message = body?.message ?? response.message;
          this.errorText.set(`${response.status}: ${message}`);
        },
      });
  }

}
