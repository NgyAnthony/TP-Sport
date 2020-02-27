import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sportslider',
  templateUrl: './sportslider.component.html',
  styleUrls: ['./sportslider.component.scss']
})
export class SportsliderComponent implements OnInit {

  @Input() sports;

  currentSport = 0;

  constructor() { }

  ngOnInit() {
  }

  onPreviousClick() {
    const previous = this.currentSport - 1;
    this.currentSport = previous < 0 ? this.sports.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSport);
  }

  onNextClick() {
    const next = this.currentSport + 1;
    this.currentSport = next === this.sports.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSport);
  }

}
