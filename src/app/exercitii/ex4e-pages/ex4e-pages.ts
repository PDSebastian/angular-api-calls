import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex4e-pages',
  templateUrl: './ex4e-pages.html',
})
export class Ex4ePages {
  private readonly http = inject(HttpClient);
  protected readonly domain = signal<string>('@gmail.com');
  protected readonly count = signal<number | null>(null);

  protected search(): void {
    this.http
      .get<number>('/users-api/api/users/by-domain/count', {
        params: { domain: this.domain() },
      })
      .subscribe({
        next: (total) => this.count.set(total),
      });
  }

}
