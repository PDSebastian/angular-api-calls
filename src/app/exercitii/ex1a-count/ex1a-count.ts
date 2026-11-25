import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-ex1a-count',
  templateUrl: './ex1a-count.html',
})
export class Ex1aCount {
  private readonly http = inject(HttpClient);
  protected readonly count = signal<number | null>(null);

  protected loadCount(): void {
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (users) => {
        this.count.set(users.length);
      },
    });
  }
}
