import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-demo2-on-init',
  templateUrl: './demo2-on-init.html',
})
export class Demo2OnInit implements OnInit {
  private readonly http = inject(HttpClient);


  protected readonly users = signal<User[]>([]);

  ngOnInit(): void {
    this.load();
  }

  protected load(): void {
    console.log('cerere trimisă');
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (data) => this.users.set(data),
    });
  }
}
