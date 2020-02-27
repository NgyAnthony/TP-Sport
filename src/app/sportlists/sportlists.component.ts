import { Component, OnInit } from '@angular/core';
import {SPORTS} from "../data/sports";
import {Model} from "../data/model";

@Component({
  selector: 'app-sportlists',
  templateUrl: './sportlists.component.html',
  styleUrls: ['./sportlists.component.scss']
})
export class SportlistsComponent implements OnInit {

  sports: Model[] = SPORTS;

  constructor() { }

  ngOnInit() {
  }

}
