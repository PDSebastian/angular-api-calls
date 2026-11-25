import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface AverageAge{
  averageAge: number;
}

@Component({
  selector: 'app-ex2b-start-average',
  templateUrl: './ex2b-start-average.html',
})
export class Ex2bStartAverage implements OnInit {
  private readonly http = inject(HttpClient);
  average = signal<number | null>(null);

  loadAverage(): void {
    this.http.get<AverageAge>('/users-api/api/users/average-age').subscribe({
      next: (age): void => {
        this.average.set(age.averageAge);
        // console.log(age.averageAge);
      },
      error() {
        console.error('error');
      },
    });
  }
  ngOnInit(): void {
    this.loadAverage();
  }
}
