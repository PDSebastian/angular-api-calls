import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface LoginResponse {
  accessToken: string;
}

@Component({
  selector: 'app-demo8-login',
  templateUrl: './demo8-login.html',
})
export class Demo8Login {
  private readonly http = inject(HttpClient);

  protected readonly token = signal<string>('');
  protected readonly result = signal<string>('');

  protected login(): void {
    const body = { email: 'admin@shop.com', password: 'admin1234' };
    this.http.post<LoginResponse>('/shop-api/api/auth/login', body).subscribe({
      next: (data) => this.token.set(data.accessToken),
    });
  }

  protected products(): void {
    this.http
      .get('/shop-api/api/products', {
        headers: { Authorization: 'Bearer ' + this.token() },
        observe: 'response',
      })
      .subscribe({
        next: (response) => this.result.set(`${response.status}`),
        error: (response: HttpErrorResponse) => this.result.set(`${response.status}`),
      });
  }
}
