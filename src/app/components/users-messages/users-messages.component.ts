import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-messages',
  templateUrl: './users-messages.component.html',
  styleUrl: './users-messages.component.scss'
})
export class UsersMessagesComponent implements OnInit{
  private path = 'http://localhost:8080/api/v1/users'
  users: any[] = []

  constructor(
    private http: HttpClient,
  ){

  }
  ngOnInit(): void {
    this.getUsers().subscribe(data => {
      this.users = data,
      console.log(this.users)
    });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.path);
  }
}
