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
  selector: 'app-demo1-http-click',
  templateUrl: './demo1-http-click.html',
})
export class Demo1HttpClick {
  private readonly http = inject(HttpClient);
  count=signal<number>(0);

  protected readonly users = signal<User[]>([]);

  loadCount():void  {
    this.http.get<User[]>('/users-api/api/users').subscribe({next:(users)=>this.count.set(users.length)});
  }

  protected load(): void {
    this.http.get<User[]>('/users-api/api/users').subscribe({
      next: (data) =>{
        this.users.set(data);
      },
    });
  }
}
