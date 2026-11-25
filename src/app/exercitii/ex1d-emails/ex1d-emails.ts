import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserEmails {
  id: number;
  email: string;
}

@Component({
  selector: 'app-ex1d-emails',
  templateUrl: './ex1d-emails.html',
})
export class Ex1dEmails {
  private readonly http = inject(HttpClient);
  users=signal<UserEmails[]>([]);

  loadEmails(): void {
    this.http.get<UserEmails[]>("users-api/api/users").subscribe({
      next: (list)=>{
        this.users.set(list)
      },
      error(){
      console.log('error');
    }

    });
  }
}
