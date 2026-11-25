import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserFullName{
  id:number;
  firstName:string;
  lastName:string;
}
@Component({
  selector: 'app-ex2a-start-list',
  templateUrl: './ex2a-start-list.html',
})
export class Ex2aStartList implements OnInit {
  private readonly http = inject(HttpClient);
  users = signal<UserFullName[]>([]);



  loadUsers():void{
    this.http.get<UserFullName[]>("/users-api/api/users").subscribe({
      next:(list)=>this.users.set(list),
      error(){
        console.log("error");
      }
    })
  }
  ngOnInit():void{
    this.loadUsers();
  }

}
