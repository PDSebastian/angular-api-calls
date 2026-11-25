import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface CtMinori {
  age:number;
  count: number;
}

@Component({
  selector: 'app-ex1e-minors',
  templateUrl: './ex1e-minors.html',
})
export class Ex1eMinors {
  private readonly http = inject(HttpClient);
  ctMinoris = signal<number | null>(null);

  loadMinors(): void {
    this.http.get<CtMinori>('users-api/api/users/count?youngerThan=18').subscribe({
      next: (min) => {
        this.ctMinoris.set(min.count);
        // console.log(min.count);
      },
      error() {
        console.log('error');
      },
    });
  }
}
