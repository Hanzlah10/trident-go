import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.page').then(m => m.QuizPage)
  },
  {
    path: 'leaderboard/:type',
    loadComponent: () => import('./pages/leaderboard/leaderboard.page').then(m => m.LeaderboardPage)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.page').then(m => m.QuizPage)
  }
];
