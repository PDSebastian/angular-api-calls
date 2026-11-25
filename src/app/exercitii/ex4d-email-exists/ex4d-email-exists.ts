import { Component, ElementRef, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex4d-email-exists',
  templateUrl: './ex4d-email-exists.html',
})
export class Ex4dEmailExists {
  private readonly http = inject(HttpClient);
  protected readonly email = signal<string>('');
  protected readonly result = signal<boolean | null>(null);

  protected check(): void {
    this.http
      .get<boolean>('/users-api/api/users/exists', {
        params: { email: this.email() },
      })
      .subscribe({
        next: (exists) => this.result.set(exists),
      });
  }
}
