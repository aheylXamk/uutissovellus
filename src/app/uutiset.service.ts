import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UutisetService {

  uutinen : any[] = null;

  constructor(private http : HttpClient) { 

    this.http.get("https://so3server.herokuapp.com/uutiset/?amount=20").subscribe((data : any[]) => {

    this.uutinen = data;

    });

  }
}
