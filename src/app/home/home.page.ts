import { Component } from '@angular/core';
import { UutisetService } from './../uutiset.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uutinen : any[] = null;

  constructor(public uutiset : UutisetService, private http : HttpClient) {


  }

}
