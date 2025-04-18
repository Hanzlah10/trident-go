import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, NavbarComponent]
})
export class LeaderboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
