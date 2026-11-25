import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-ex3a-loading',
  templateUrl: './ex3a-loading.html',
})
export class Ex3aLoading implements OnInit {
  private readonly http = inject(HttpClient);
  protected readonly loading = signal<boolean>(true);
  protected readonly users = signal<User[]>([]);

  ngOnInit(): void {
    this.loadUsers();
  }

  protected loadUsers(): void {
    this.loading.set(true);
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (list) => {
        this.users.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
