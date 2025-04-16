import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, NavbarComponent, RouterLink],

})

export class HomePage {

  constructor() {
    // setInterval(() => {
    //   if (this.userScore < this.total) {
    //     this.userScore += 5; // or any step size
    //     this.progress = (this.userScore / this.total) * 100;
    //   }
    // }, 1000);
  }
  // total 120 is the score
  total: number = 120
  userScore: number = 69
  progress: number = (this.userScore / this.total) * 100;
}
