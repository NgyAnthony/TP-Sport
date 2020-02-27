import { Component, OnInit } from '@angular/core';
import { SPORTS } from '../data/sports';
import { Model } from '../data/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss']
})
export class SportDetailsComponent implements OnInit {
  sports: Model[] = SPORTS;
  public requestedID: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.requestedID = 1;
  }

}
