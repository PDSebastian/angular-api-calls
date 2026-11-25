import { Component,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  id:string;
  email:string;
}

@Component({
  selector: 'app-ex4b-domain',
  templateUrl: './ex4b-domain.html',
})
export class Ex4bDomain {
  private readonly http = inject(HttpClient);
  protected readonly domain = signal<string>('@gmail.com');
  protected readonly users = signal<User[] | null>(null);

  protected search(): void {
    this.http
      .get<User[]>('/users-api/api/users/by-domain', {
        params: { domain: this.domain() },
      })
      .subscribe({
        next: (list) => this.users.set(list),
      });
  }
}
