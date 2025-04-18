import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-view',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {

  prizeWorth!: string
  @Input() type: string = '';
  // @Input() data: any[] = [];


  constructor() { }

  ngOnInit() {
    if (this.type == 'go') {
      this.prizeWorth = "600.00";
    }
    else {
      this.prizeWorth = "1200.00";
    }
  }



}
