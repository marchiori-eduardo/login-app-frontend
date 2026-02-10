import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(private httpClient: HttpClient) {}
  
  login(name: string, password: string) { 
    return this.httpClient.post("/login", { name, password });
  }
}
