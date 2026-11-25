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
  selector: 'app-ex1c-top3',
  templateUrl: './ex1c-top3.html',
})
export class Ex1cTop3 {
  private readonly http = inject(HttpClient);
  protected readonly top3Users = signal<User[]>([]);

  protected loadTop3Users(): void {
    this.http.get<User[]>('/users-api/api/users/top3-by-age').subscribe({
      next: (users) => {
        this.top3Users.set(users);
      },
    });
  }
}
