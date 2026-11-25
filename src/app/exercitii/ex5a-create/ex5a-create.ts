import { Component,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex5a-create',
  templateUrl: './ex5a-create.html',
})
export class Ex5aCreate {
  private readonly http=inject(HttpClient);



}
