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
  selector: 'app-ex3b-server-down',
  templateUrl: './ex3b-server-down.html',
})
export class Ex3bServerDown {
  private readonly http = inject(HttpClient);
  protected readonly users = signal<User[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }
  protected load(): void {
    this.errorMessage.set(null);
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: () => {
        this.errorMessage.set('Serverul nu răspunde. Pornește backend-ul.');
      },
    });
  }
}
