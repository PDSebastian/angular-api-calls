import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex3e-statuses',
  templateUrl: './ex3e-statuses.html',
})
export class Ex3eStatuses {
  private readonly http = inject(HttpClient);
  protected readonly status = signal<number | null>(null);

  protected call(url: string): void {
    this.http.get(url, { observe: 'response' }).subscribe({
      next: (res) => this.status.set(res.status),
      error: (err) => this.status.set(err.status),
    });
  }
}
