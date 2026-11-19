import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-demo6-patch-delete',
  templateUrl: './demo6-patch-delete.html',
})
export class Demo6PatchDelete implements OnInit {
  private readonly http = inject(HttpClient);

  protected readonly users = signal<User[]>([]);

  ngOnInit(): void {
    this.load();
  }

  protected load(): void {
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (data) => this.users.set(data),
    });
  }

  protected older(user: User): void {
    this.http.patch<User>(`/users-api/api/users/${user.id}`, { age: user.age + 1 }).subscribe({
      next: (updated) =>
        this.users.update((list) => list.map((u) => (u.id === updated.id ? updated : u))),
    });
  }

  protected remove(id: string): void {
    this.http.delete(`/users-api/api/users/${id}`).subscribe({
      next: () => this.users.update((list) => list.filter((u) => u.id !== id)),
    });
  }
}
