import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  age:number;

}

@Component({
  selector: 'app-ex3d-retry',
  templateUrl: './ex3d-retry.html',
})
export class Ex3dRetry {
  private readonly http=inject(HttpClient);
  protected readonly users=signal<User[]>([]);
  protected readonly errorMessage=signal<string|null>(null);

  ngOnInit() {
    this.load
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
