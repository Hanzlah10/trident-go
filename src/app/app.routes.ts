import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { QuizPage } from './pages/quiz/quiz.page';
import { LeaderboardPage } from './pages/leaderboard/leaderboard.page';

// export const routes: Routes = [
//   {
//     path: 'home',
//     loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'quiz',
//     loadComponent: () => import('./pages/quiz/quiz.page').then(m => m.QuizPage)
//   },
//   {
//     path: 'leaderboard/:type',
//     loadComponent: () => import('./pages/leaderboard/leaderboard.page').then(m => m.LeaderboardPage)
//   },
// ];


export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'quiz',
    component: QuizPage
  },
  {
    path: 'leaderboard/:type',
    component: LeaderboardPage
  }
];
