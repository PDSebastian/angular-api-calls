import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  id:string;
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-ex4c-between-ages',
  templateUrl: './ex4c-between-ages.html',
})
export class Ex4cBetweenAges {
  private readonly http = inject(HttpClient);
  protected readonly minAge = signal<number>(20);
  protected readonly maxAge = signal<number>(30);
  protected readonly users = signal<User[] | null>(null);

  protected search(): void {
    this.http
      .get<User[]>('/users-api/api/users/between-ages', {
        params: {
          minAge: this.minAge(),
          maxAge: this.maxAge(),
        },
      })
      .subscribe({
        next: (list) => this.users.set(list),
      });
  }
}
