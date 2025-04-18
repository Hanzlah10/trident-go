import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { LeaderboardComponent } from 'src/app/shared/leaderboard/leaderboard.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, NavbarComponent, LeaderboardComponent]
})
export class LeaderboardPage implements OnInit {
  type: string;
  constructor(private route: ActivatedRoute) {
    this.type = this.route.snapshot.params['type'];
    console.log(this.type);

  }
  ngOnInit() {
  }

}
