import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { QuestionComponent } from 'src/app/shared/question/question.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonContent, QuestionComponent, NavbarComponent]
})
export class QuizPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
