import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AverageAge {
  averageAge: number;
}

@Component({
  selector: 'app-ex1b-average-age',
  templateUrl: './ex1b-average-age.html',
})
export class Ex1bAverageAge {
  private readonly http = inject(HttpClient);
  protected readonly averageAge = signal<number | null>(null);

  protected loadAverageAge(): void {
    this.http.get<AverageAge>('/users-api/api/users/average-age').subscribe({
      next: (response) => {
        this.averageAge.set(response.averageAge);
      },
    });
  }
}
