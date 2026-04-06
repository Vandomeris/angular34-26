import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { AboutPage } from './pages/about-page/about-page';
import { PersonPage } from './pages/person-page/person-page';
import { UsersPage } from './pages/users-page/users-page';
import { ExchangePage } from './pages/exchange-page/exchange-page';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'about', component: AboutPage },
  { path: 'about/:person', component: PersonPage },
  { path: 'users', component: UsersPage },
  { path: 'exchange', component: ExchangePage },
];
