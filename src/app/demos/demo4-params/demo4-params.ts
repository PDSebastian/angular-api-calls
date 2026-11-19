import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-demo4-params',
  templateUrl: './demo4-params.html',
})
export class Demo4Params {
  private readonly http = inject(HttpClient);

  protected readonly age = signal<number>(25);
  protected readonly users = signal<User[]>([]);

  protected search(): void {
    this.http
      .get<User[]>('/users-api/api/users/older-than', { params: { age: this.age() } })
      .subscribe({
        next: (data) => this.users.set(data),
      });
  }
}
