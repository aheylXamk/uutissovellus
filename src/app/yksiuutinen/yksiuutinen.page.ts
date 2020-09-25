import { UutisetService } from './../uutiset.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksiuutinen',
  templateUrl: './yksiuutinen.page.html',
  styleUrls: ['./yksiuutinen.page.scss'],
})
export class YksiuutinenPage implements OnInit {

  uutis : any;


  constructor(private route : ActivatedRoute, private uutiset : UutisetService ) { }

  ngOnInit() {

   let indeksi = Number(this.route.snapshot.paramMap.get("indeksi"));

    this.uutis = this.uutiset.uutinen[indeksi];


  }

}
