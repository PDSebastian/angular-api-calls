import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-ex4a-older-than',
  templateUrl: './ex4a-older-than.html',
})
export class Ex4aOlderThan {
  private readonly http = inject(HttpClient);
  protected readonly age = signal<number>(20);
  protected readonly users = signal<User[] | null>(null);

  protected search(): void {
    this.http
      .get<User[]>('/users-api/api/users/older-than', {
        params: { age: this.age() },
      })
      .subscribe({
        next: (list) => this.users.set(list),
      });
  }
}
