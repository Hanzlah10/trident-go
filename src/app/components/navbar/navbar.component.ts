import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonBackButton, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonButtons, IonBackButton]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
